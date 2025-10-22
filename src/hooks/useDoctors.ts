
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Doctor, DoctorSearchParams } from '@/types/doctor';

export function useDoctors(params: DoctorSearchParams = {}) {
  return useQuery({
    queryKey: ['doctors', params],
    queryFn: async () => {
      const { page = 1, limit = 12, sortBy = 'rating', sortOrder = 'desc', filters } = params;
      
      let query = supabase
        .from('doctors')
        .select('*')
        .eq('is_active', true);

      // Apply filters
      if (filters?.specialty) {
        query = query.eq('specialty', filters.specialty);
      }
      if (filters?.city) {
        query = query.eq('city', filters.city);
      }
      if (filters?.state) {
        query = query.eq('state', filters.state);
      }
      if (filters?.minRating) {
        query = query.gte('average_rating', filters.minRating);
      }
      if (filters?.maxFee) {
        query = query.lte('consultation_fee', filters.maxFee);
      }
      if (filters?.acceptsInsurance !== undefined) {
        query = query.eq('accepts_insurance', filters.acceptsInsurance);
      }
      if (filters?.searchQuery) {
        query = query.or(`first_name.ilike.%${filters.searchQuery}%,last_name.ilike.%${filters.searchQuery}%,specialty.ilike.%${filters.searchQuery}%`);
      }

      // Apply sorting
      const sortColumn = sortBy === 'name' ? 'last_name' : 
                        sortBy === 'fee' ? 'consultation_fee' :
                        sortBy === 'experience' ? 'years_of_experience' : 'average_rating';
      
      query = query.order(sortColumn, { ascending: sortOrder === 'asc' });

      // Apply pagination
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;
      
      if (error) throw error;
      
      return {
        doctors: data as Doctor[],
        totalCount: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
        currentPage: page
      };
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useDoctor(id: string) {
  return useQuery({
    queryKey: ['doctor', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data as Doctor;
    },
    enabled: !!id,
  });
}

export function useIncrementDoctorViews() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (doctorId: string) => {
      const { error } = await supabase.rpc('increment_doctor_views', {
        doctor_id: doctorId
      });
      
      if (error) throw error;
    },
    onSuccess: (_, doctorId) => {
      queryClient.invalidateQueries({ queryKey: ['doctor', doctorId] });
    },
  });
}
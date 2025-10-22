
export interface Doctor {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  specialty: string;
  sub_specialty?: string;
  license_number: string;
  years_of_experience: number;
  bio?: string;
  education?: string[];
  certifications?: string[];
  languages?: string[];
  hospital_affiliations?: string[];
  practice_name?: string;
  practice_address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  consultation_fee?: number;
  accepts_insurance?: boolean;
  insurance_accepted?: string[];
  profile_image_url?: string;
  office_images?: string[];
  average_rating: number;
  total_reviews: number;
  is_verified: boolean;
  is_active: boolean;
  profile_views: number;
  last_active?: string;
}

export interface DoctorFilters {
  specialty?: string;
  city?: string;
  state?: string;
  minRating?: number;
  acceptsInsurance?: boolean;
  maxFee?: number;
  searchQuery?: string;
}

export interface DoctorSearchParams {
  page?: number;
  limit?: number;
  sortBy?: 'rating' | 'experience' | 'name' | 'fee';
  sortOrder?: 'asc' | 'desc';
  filters?: DoctorFilters;
}

export const MEDICAL_SPECIALTIES = [
  'Cardiology',
  'Dermatology',
  'Emergency Medicine',
  'Family Medicine',
  'Internal Medicine',
  'Neurology',
  'Obstetrics & Gynecology',
  'Oncology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'Surgery',
  'Urology'
] as const;

export type MedicalSpecialty = typeof MEDICAL_SPECIALTIES[number];
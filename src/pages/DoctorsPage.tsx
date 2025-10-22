
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, DollarSign, Search, Filter } from 'lucide-react';
import { useDoctors } from '@/hooks/useDoctors';
import { MEDICAL_SPECIALTIES } from '@/types/doctor';
import type { DoctorFilters } from '@/types/doctor';
import { mockDoctors } from '@/data/mockDoctors';

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<DoctorFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  // For now, use mock data since database might not be ready
  const doctors = mockDoctors.map((doctor, index) => ({
    ...doctor,
    id: `doctor-${index + 1}`,
    created_at: new Date().toISOString(),
    profile_views: Math.floor(Math.random() * 1000),
    last_active: new Date().toISOString()
  }));

  const filteredDoctors = doctors.filter(doctor => {
    if (searchQuery && !`${doctor.first_name} ${doctor.last_name} ${doctor.specialty}`.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.specialty && doctor.specialty !== filters.specialty) {
      return false;
    }
    if (filters.city && doctor.city !== filters.city) {
      return false;
    }
    if (filters.minRating && doctor.average_rating < filters.minRating) {
      return false;
    }
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Doctors</h1>
        <p className="text-muted-foreground">
          Search through our network of {doctors.length} verified healthcare professionals
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search doctors by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {showFilters && (
          <Card className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Specialty</label>
                <Select value={filters.specialty || ''} onValueChange={(value) => 
                  setFilters(prev => ({ ...prev, specialty: value || undefined }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="All specialties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All specialties</SelectItem>
                    {MEDICAL_SPECIALTIES.map(specialty => (
                      <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <Select value={filters.city || ''} onValueChange={(value) => 
                  setFilters(prev => ({ ...prev, city: value || undefined }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="All cities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All cities</SelectItem>
                    <SelectItem value="Boston">Boston</SelectItem>
                    <SelectItem value="San Francisco">San Francisco</SelectItem>
                    <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
                <Select value={filters.minRating?.toString() || ''} onValueChange={(value) => 
                  setFilters(prev => ({ ...prev, minRating: value ? parseFloat(value) : undefined }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any rating</SelectItem>
                    <SelectItem value="4.5">4.5+ stars</SelectItem>
                    <SelectItem value="4.0">4.0+ stars</SelectItem>
                    <SelectItem value="3.5">3.5+ stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div 
                className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4"
                style={{
                  backgroundImage: `url(${doctor.profile_image_url})`
                }}
              />
              <CardTitle className="text-lg">
                Dr. {doctor.first_name} {doctor.last_name}
              </CardTitle>
              <CardDescription>{doctor.specialty}</CardDescription>
              {doctor.is_verified && (
                <Badge variant="secondary" className="w-fit mx-auto">
                  Verified
                </Badge>
              )}
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < Math.floor(doctor.average_rating) 
                        ? 'fill-warning text-warning' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {doctor.average_rating} ({doctor.total_reviews} reviews)
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {doctor.city}, {doctor.state}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="h-4 w-4 mr-2" />
                  ${doctor.consultation_fee} consultation
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {doctor.years_of_experience}+ years
                </Badge>
                {doctor.sub_specialty && (
                  <Badge variant="outline" className="text-xs">
                    {doctor.sub_specialty}
                  </Badge>
                )}
              </div>
              
              <Button className="w-full" asChild>
                <Link to={`/doctors/${doctor.id}`}>View Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No doctors found matching your criteria.
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchQuery('');
              setFilters({});
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
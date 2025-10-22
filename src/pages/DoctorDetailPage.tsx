
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Award, 
  GraduationCap,
  Building2,
  DollarSign,
  Shield,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { mockDoctors } from '@/data/mockDoctors';

export default function DoctorDetailPage() {
  const { id } = useParams();
  
  // For now, use mock data
  const doctorIndex = parseInt(id?.split('-')[1] || '1') - 1;
  const doctor = mockDoctors[doctorIndex];
  
  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">Doctor not found</p>
            <Button asChild>
              <Link to="/doctors">Back to Doctors</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/doctors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Doctors
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div 
                  className="w-32 h-32 rounded-lg bg-cover bg-center flex-shrink-0"
                  style={{
                    backgroundImage: `url(${doctor.profile_image_url})`
                  }}
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">
                        Dr. {doctor.first_name} {doctor.last_name}
                      </h1>
                      <p className="text-xl text-muted-foreground mb-2">{doctor.specialty}</p>
                      {doctor.sub_specialty && (
                        <p className="text-muted-foreground">{doctor.sub_specialty}</p>
                      )}
                    </div>
                    {doctor.is_verified && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < Math.floor(doctor.average_rating) 
                              ? 'fill-warning text-warning' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                      <span className="font-medium ml-2">{doctor.average_rating}</span>
                      <span className="text-muted-foreground">({doctor.total_reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">
                      <Clock className="h-3 w-3 mr-1" />
                      {doctor.years_of_experience}+ years experience
                    </Badge>
                    {doctor.languages?.map(lang => (
                      <Badge key={lang} variant="outline">{lang}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About Dr. {doctor.last_name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
            </CardContent>
          </Card>

          {/* Education & Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {doctor.education && (
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <ul className="space-y-1">
                    {doctor.education.map((edu, index) => (
                      <li key={index} className="text-muted-foreground">• {edu}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {doctor.certifications && (
                <div>
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <ul className="space-y-1">
                    {doctor.certifications.map((cert, index) => (
                      <li key={index} className="text-muted-foreground">• {cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Hospital Affiliations */}
          {doctor.hospital_affiliations && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Hospital Affiliations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {doctor.hospital_affiliations.map((hospital, index) => (
                    <li key={index} className="text-muted-foreground">• {hospital}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Card */}
          <Card>
            <CardHeader>
              <CardTitle>Book Appointment</CardTitle>
              <CardDescription>Schedule a consultation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Consultation Fee</span>
                <span className="font-semibold text-lg">${doctor.consultation_fee}</span>
              </div>
              
              <Separator />
              
              <Button className="w-full" size="lg">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Available appointments will be shown after clicking
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {doctor.practice_name && (
                <div>
                  <h4 className="font-semibold">{doctor.practice_name}</h4>
                </div>
              )}
              
              {doctor.practice_address && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                  <div className="text-sm">
                    <p>{doctor.practice_address}</p>
                    <p>{doctor.city}, {doctor.state} {doctor.zip_code}</p>
                  </div>
                </div>
              )}
              
              {doctor.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{doctor.phone}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{doctor.email}</span>
              </div>
            </CardContent>
          </Card>

          {/* Insurance */}
          {doctor.accepts_insurance && doctor.insurance_accepted && (
            <Card>
              <CardHeader>
                <CardTitle>Insurance Accepted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.insurance_accepted.map((insurance, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {insurance}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
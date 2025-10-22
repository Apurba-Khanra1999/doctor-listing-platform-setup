
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Star, Clock, Shield, Users, Award, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Find the Right Doctor for You
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Connect with qualified healthcare professionals in your area. Book appointments, read reviews, and get the care you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/doctors">
                <Search className="mr-2 h-5 w-5" />
                Find Doctors
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="w-full h-64 md:h-96 rounded-lg bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MedConnect?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make healthcare accessible and convenient for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Search</CardTitle>
                <CardDescription>
                  Find doctors by specialty, location, or insurance coverage
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Verified Professionals</CardTitle>
                <CardDescription>
                  All doctors are licensed and verified healthcare professionals
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Quick Booking</CardTitle>
                <CardDescription>
                  Book appointments instantly with real-time availability
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Doctors</h2>
            <p className="text-xl text-muted-foreground">
              Meet some of our top-rated healthcare professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div 
                    className="w-24 h-24 rounded-full bg-cover bg-center mx-auto mb-4"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${1612349317150 + i}?w=200&h=200&fit=crop&crop=face)`
                    }}
                  />
                  <CardTitle>Dr. Sarah Johnson</CardTitle>
                  <CardDescription>Cardiologist</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">4.9 (127 reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">15+ years</Badge>
                    <Badge variant="secondary">Heart Surgery</Badge>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/doctors/${i}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/doctors">View All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Verified Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">50k+</div>
              <div className="text-muted-foreground">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning mb-2">25+</div>
              <div className="text-muted-foreground">Specialties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-info mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 medical-gradient text-primary-foreground">
        <div className="container mx-auto text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Doctor?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of patients who have found their perfect healthcare match through MedConnect
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link to="/doctors">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
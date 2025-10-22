
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MedConnect</span>
            </div>
            <p className="text-muted-foreground">
              Connecting patients with qualified healthcare professionals for better health outcomes.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/doctors" className="block text-muted-foreground hover:text-primary transition-colors">
                Find Doctors
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Specialties</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Cardiology</p>
              <p>Dermatology</p>
              <p>Pediatrics</p>
              <p>Orthopedics</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@medconnect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Medical Center Dr</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 MedConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
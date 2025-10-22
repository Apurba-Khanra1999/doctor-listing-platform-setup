
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DoctorDetailPage() {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Doctor Profile</CardTitle>
          <CardDescription>
            Detailed information about Doctor ID: {id}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Doctor profile details, reviews, and booking functionality will be implemented here.
          </p>
          <Button className="mt-4" disabled>
            Book Appointment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
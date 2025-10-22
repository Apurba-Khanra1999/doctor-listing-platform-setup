
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Find Doctors</CardTitle>
          <CardDescription>
            Search and filter through our network of healthcare professionals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Doctor listing and search functionality will be implemented here.
          </p>
          <Button className="mt-4" disabled>
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>About MedConnect</CardTitle>
          <CardDescription>
            Learn more about our mission and values
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            About page content will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Get in touch with our team
          </CardDescription>
        </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Contact form and information will be implemented here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
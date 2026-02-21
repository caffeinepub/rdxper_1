import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Download, Shield } from 'lucide-react';

export default function Landing() {
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const navigate = useNavigate();

  useEffect(() => {
    if (identity) {
      navigate({ to: '/dashboard' });
    }
  }, [identity, navigate]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/generated/hero-background.dim_1920x600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Generate Academic Research Papers with{' '}
              <span className="text-primary">RDXper</span>
            </h1>
            <div className="pt-4">
              <Button size="lg" onClick={login} disabled={isLoggingIn} className="text-lg px-8 py-6">
                {isLoggingIn ? 'Signing In...' : 'Get Started'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RDXper?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Comprehensive Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  16-section academic format including abstract, literature review, methodology, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Academic Rigor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Formal tone, APA citations, IRAC structure for legal reasoning, and statistical analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Easy Export</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Download your completed research paper in a professional format ready for submission.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Secure & Private</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your research is protected with Internet Identity authentication and blockchain storage.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl">Ready to Start Your Research?</CardTitle>
              <CardDescription className="text-lg">
                Sign in with Internet Identity and generate your first academic paper in minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" onClick={login} disabled={isLoggingIn}>
                {isLoggingIn ? 'Signing In...' : 'Sign In Now'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

import { useCheckPaperSaved } from '../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Eye } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { Skeleton } from '@/components/ui/skeleton';

export default function PaperList() {
  const { data: hasPaper, isLoading } = useCheckPaperSaved();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (!hasPaper) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Papers Yet</h3>
          <p className="text-muted-foreground">
            Generate your first research paper using the form above.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Research Paper</CardTitle>
        <CardDescription>View and download your generated paper</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => navigate({ to: '/paper' })}
          className="w-full gap-2"
          variant="outline"
        >
          <Eye className="h-4 w-4" />
          View Research Paper
        </Button>
      </CardContent>
    </Card>
  );
}

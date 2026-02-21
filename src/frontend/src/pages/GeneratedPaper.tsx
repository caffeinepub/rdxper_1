import ProtectedRoute from '../components/ProtectedRoute';
import PaperView from '../components/PaperView';
import { usePaperData } from '../hooks/useQueries';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, FileText } from 'lucide-react';
import LoadingStates from '../components/LoadingStates';

export default function GeneratedPaper() {
  const { data: paper, isLoading, error } = usePaperData();

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {isLoading && <LoadingStates.PaperSkeleton />}

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error instanceof Error ? error.message : 'Failed to load research paper'}
            </AlertDescription>
          </Alert>
        )}

        {!isLoading && !error && !paper && (
          <Card className="p-12 text-center">
            <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Research Paper Found</h2>
            <p className="text-muted-foreground">
              Generate your first research paper from the dashboard to view it here.
            </p>
          </Card>
        )}

        {paper && <PaperView paper={paper} />}
      </div>
    </ProtectedRoute>
  );
}

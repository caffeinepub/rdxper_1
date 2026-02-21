import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const FormSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-24 w-full" />
    <Skeleton className="h-10 w-full" />
  </div>
);

const PaperSkeleton = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-10 w-32" />
    </div>

    <Card>
      <CardContent className="p-8 md:p-12 space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>

        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

const LoadingStates = {
  FormSkeleton,
  PaperSkeleton,
};

export default LoadingStates;

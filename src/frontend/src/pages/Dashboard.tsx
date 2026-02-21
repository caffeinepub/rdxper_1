import ProtectedRoute from '../components/ProtectedRoute';
import ResearchTopicForm from '../components/ResearchTopicForm';
import PaperList from '../components/PaperList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Research Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Enter your research topic to generate a comprehensive academic paper
            </p>
          </div>

          {/* New Paper Section */}
          <Card>
            <CardHeader>
              <CardTitle>Generate New Research Paper</CardTitle>
              <CardDescription>
                Provide your research topic and we'll create a structured academic paper following scholarly standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResearchTopicForm />
            </CardContent>
          </Card>

          <Separator />

          {/* Saved Papers Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Research Papers</h2>
            <PaperList />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

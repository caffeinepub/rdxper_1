import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useCreatePaper } from '../hooks/useQueries';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';

export default function ResearchTopicForm() {
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [objectives, setObjectives] = useState('');
  const { identity } = useInternetIdentity();
  const createPaperMutation = useCreatePaper();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic.trim()) {
      toast.error('Please enter a research topic');
      return;
    }

    if (!identity) {
      toast.error('Please sign in to generate a paper');
      return;
    }

    const author = identity.getPrincipal().toString();
    const paperTitle = title.trim() || `Research Paper: ${topic}`;
    const keywordsArray = keywords.trim() 
      ? keywords.split(',').map(k => k.trim()).filter(k => k.length > 0)
      : ['research', 'analysis', 'study'];
    const objectivesText = objectives.trim() || `To analyze ${topic} and develop evidence-based recommendations`;

    try {
      await createPaperMutation.mutateAsync({
        title: paperTitle,
        author,
        researchTopic: topic,
        keywords: keywordsArray,
        objectives: objectivesText,
      });
      
      toast.success('Research paper generated successfully with AI!');
      navigate({ to: '/paper' });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to generate paper. Please try again.';
      toast.error(errorMessage);
      console.error('Error generating paper:', error);
    }
  };

  const isGenerating = createPaperMutation.isPending;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="topic">Research Topic *</Label>
        <Textarea
          id="topic"
          placeholder="Enter your research topic (e.g., 'The Impact of Artificial Intelligence on Legal Practice')"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          rows={3}
          className="resize-none"
          required
          disabled={isGenerating}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Paper Title (Optional)</Label>
        <Input
          id="title"
          placeholder="Leave blank to auto-generate from topic"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isGenerating}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="keywords">Keywords (Optional)</Label>
        <Input
          id="keywords"
          placeholder="Comma-separated keywords (e.g., AI, legal tech, automation)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          disabled={isGenerating}
        />
        <p className="text-xs text-muted-foreground">
          Separate multiple keywords with commas
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="objectives">Research Objectives (Optional)</Label>
        <Textarea
          id="objectives"
          placeholder="Describe the main objectives of your research"
          value={objectives}
          onChange={(e) => setObjectives(e.target.value)}
          rows={4}
          className="resize-none"
          disabled={isGenerating}
        />
        <p className="text-xs text-muted-foreground">
          Describe what you want to achieve with this research
        </p>
      </div>

      {createPaperMutation.isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {createPaperMutation.error instanceof Error 
              ? createPaperMutation.error.message 
              : 'Failed to generate paper. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={isGenerating || !topic.trim()}
        className="w-full gap-2"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating your research paper with AI...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Generate Research Paper with AI
          </>
        )}
      </Button>

      {isGenerating && (
        <div className="space-y-2">
          <p className="text-sm text-center text-muted-foreground">
            AI is crafting your comprehensive research paper (4,000-5,000 words)...
          </p>
          <p className="text-xs text-center text-muted-foreground">
            This may take 1-2 minutes. Please don't close this page.
          </p>
        </div>
      )}
    </form>
  );
}

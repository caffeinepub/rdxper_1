import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ResearchPaper } from '../backend';
import { downloadPaperAsPDF } from '../utils/downloadHelper';
import { toast } from 'sonner';

interface DownloadButtonProps {
  paper: ResearchPaper;
}

export default function DownloadButton({ paper }: DownloadButtonProps) {
  const handleDownload = () => {
    try {
      downloadPaperAsPDF(paper);
      toast.success('Opening print dialog - save as PDF to download');
    } catch (error) {
      toast.error('Failed to open print dialog. Please allow popups for this site.');
      console.error('Download error:', error);
    }
  };

  return (
    <Button onClick={handleDownload} className="gap-2">
      <Download className="h-4 w-4" />
      Download as PDF
    </Button>
  );
}

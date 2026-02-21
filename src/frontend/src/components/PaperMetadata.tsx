import { ResearchPaper } from '../backend';

interface PaperMetadataProps {
  paper: ResearchPaper;
}

export default function PaperMetadata({ paper }: PaperMetadataProps) {
  // Format principal for better readability
  const formatAuthor = (author: string) => {
    if (author.length > 20) {
      return `${author.slice(0, 8)}...${author.slice(-8)}`;
    }
    return author;
  };

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">{paper.title}</h1>
      <div className="text-muted-foreground">
        <p className="text-lg">Author: {formatAuthor(paper.author)}</p>
      </div>
    </div>
  );
}

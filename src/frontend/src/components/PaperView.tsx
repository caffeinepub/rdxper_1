import { ResearchPaper } from '../backend';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PaperMetadata from './PaperMetadata';
import DownloadButton from './DownloadButton';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PaperViewProps {
  paper: ResearchPaper;
}

export default function PaperView({ paper }: PaperViewProps) {
  return (
    <div className="space-y-6">
      {/* Header with Download */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Research Paper</h1>
        <DownloadButton paper={paper} />
      </div>

      {/* Paper Content */}
      <Card>
        <CardContent className="p-8 md:p-12 space-y-8">
          {/* Title and Author */}
          <PaperMetadata paper={paper} />

          <Separator />

          {/* Abstract */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Abstract</h2>
            <p className="text-justify leading-relaxed">{paper.abstract}</p>
          </section>

          {/* Keywords */}
          <section>
            <h3 className="text-xl font-semibold mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          <Separator />

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-justify leading-relaxed">{paper.introduction}</p>
          </section>

          <Separator />

          {/* Government Framework */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Government/Legal Framework</h2>
            <p className="text-justify leading-relaxed">{paper.governmentFramework}</p>
          </section>

          <Separator />

          {/* Factors Affecting */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Factors Affecting the Issue</h2>
            <p className="text-justify leading-relaxed">{paper.factors}</p>
          </section>

          <Separator />

          {/* Comparative Analysis */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Comparative Analysis</h2>
            <p className="text-justify leading-relaxed">{paper.comparativeAnalysis}</p>
          </section>

          <Separator />

          {/* Objectives */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Objectives of the Study</h2>
            <p className="text-justify leading-relaxed">{paper.objectives}</p>
          </section>

          <Separator />

          {/* Literature Review */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Literature Review</h2>
            <p className="text-justify leading-relaxed">{paper.literatureReview}</p>
          </section>

          <Separator />

          {/* Methodology */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Methodology</h2>
            <p className="text-justify leading-relaxed">{paper.methodology}</p>
          </section>

          <Separator />

          {/* Data Analysis */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Data Analysis</h2>
            <p className="text-justify leading-relaxed">{paper.dataAnalysis}</p>
          </section>

          <Separator />

          {/* Results */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Results</h2>
            <p className="text-justify leading-relaxed">{paper.results}</p>
          </section>

          <Separator />

          {/* Discussion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Discussion</h2>
            <p className="text-justify leading-relaxed">{paper.discussion}</p>
          </section>

          <Separator />

          {/* Policy Recommendations */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Policy Recommendations</h2>
            <p className="text-justify leading-relaxed">{paper.policyRecommendations}</p>
          </section>

          <Separator />

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Conclusion</h2>
            <p className="text-justify leading-relaxed">{paper.conclusion}</p>
          </section>

          <Separator />

          {/* Citations */}
          <section>
            <h2 className="text-2xl font-bold mb-4">References</h2>
            <div className="text-sm leading-relaxed whitespace-pre-wrap">
              {paper.citations}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

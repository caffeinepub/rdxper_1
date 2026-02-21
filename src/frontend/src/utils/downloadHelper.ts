import { ResearchPaper } from '../backend';
import { generatePrintableHTML } from './pdfFormatter';

export function formatPaperForDownload(paper: ResearchPaper): string {
  const sections: string[] = [];
  
  // Title (centered, uppercase)
  sections.push(paper.title.toUpperCase());
  sections.push('');
  
  // Author
  sections.push(`Author: ${paper.author}`);
  sections.push('');
  sections.push('='.repeat(80));
  sections.push('');
  
  // Abstract
  sections.push('ABSTRACT');
  sections.push('');
  sections.push(paper.abstract);
  sections.push('');
  
  // Keywords
  sections.push('Keywords: ' + paper.keywords.join('; '));
  sections.push('');
  sections.push('='.repeat(80));
  sections.push('');
  
  // 1. Introduction
  sections.push('1. INTRODUCTION');
  sections.push('');
  sections.push(paper.introduction);
  sections.push('');
  
  // 2. Literature Review
  sections.push('2. LITERATURE REVIEW');
  sections.push('');
  sections.push(paper.literatureReview);
  sections.push('');
  
  // 3. Government/Legal Framework
  sections.push('3. GOVERNMENT/LEGAL FRAMEWORK');
  sections.push('');
  sections.push(paper.governmentFramework);
  sections.push('');
  
  // 4. Factors Affecting the Issue
  sections.push('4. FACTORS AFFECTING THE ISSUE');
  sections.push('');
  sections.push(paper.factors);
  sections.push('');
  
  // 5. Comparative Analysis
  sections.push('5. COMPARATIVE ANALYSIS');
  sections.push('');
  sections.push(paper.comparativeAnalysis);
  sections.push('');
  
  // 6. Objectives of the Study
  sections.push('6. OBJECTIVES OF THE STUDY');
  sections.push('');
  sections.push(paper.objectives);
  sections.push('');
  
  // 7. Methodology
  sections.push('7. METHODOLOGY');
  sections.push('');
  sections.push(paper.methodology);
  sections.push('');
  
  // 8. Data Analysis
  sections.push('8. DATA ANALYSIS');
  sections.push('');
  sections.push(paper.dataAnalysis);
  sections.push('');
  
  // 9. Results
  sections.push('9. RESULTS');
  sections.push('');
  sections.push(paper.results);
  sections.push('');
  
  // 10. Discussion
  sections.push('10. DISCUSSION');
  sections.push('');
  sections.push(paper.discussion);
  sections.push('');
  
  // 11. Policy Recommendations
  sections.push('11. POLICY RECOMMENDATIONS');
  sections.push('');
  sections.push(paper.policyRecommendations);
  sections.push('');
  
  // 12. Conclusion
  sections.push('12. CONCLUSION');
  sections.push('');
  sections.push(paper.conclusion);
  sections.push('');
  
  // References
  sections.push('='.repeat(80));
  sections.push('');
  sections.push('REFERENCES');
  sections.push('');
  sections.push(paper.citations);
  sections.push('');
  
  return sections.join('\n');
}

export function downloadPaper(content: string, title: string): void {
  // Create a sanitized filename
  const filename = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;

  // Create blob and download
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadPaperAsPDF(paper: ResearchPaper): void {
  // Generate printable HTML
  const htmlContent = generatePrintableHTML(paper);
  
  // Create a new window with the formatted content
  const printWindow = window.open('', '_blank');
  
  if (!printWindow) {
    throw new Error('Unable to open print window. Please allow popups for this site.');
  }
  
  // Write the HTML content
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  
  // Wait for content to load, then trigger print dialog
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
      // Note: Window will close automatically after printing or if user cancels
      // Some browsers may keep it open - that's expected behavior
    }, 250);
  };
}

import { ResearchPaper } from '../backend';

export function generatePrintableHTML(paper: ResearchPaper): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${paper.title}</title>
  <style>
    @page {
      size: A4;
      margin: 25mm;
    }
    
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      line-height: 1.6;
      color: #000;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20px;
      background: white;
    }
    
    h1 {
      font-size: 16pt;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 20px;
      line-height: 1.4;
    }
    
    .author {
      font-size: 11pt;
      margin-bottom: 10px;
    }
    
    .separator {
      border-top: 1px solid #000;
      margin: 15px 0;
    }
    
    h2 {
      font-size: 12pt;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    
    .abstract-heading {
      font-size: 12pt;
      font-weight: bold;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    
    .keywords {
      font-style: italic;
      margin-bottom: 15px;
    }
    
    p {
      text-align: justify;
      margin-bottom: 10px;
    }
    
    .objectives {
      text-align: justify;
      margin-bottom: 10px;
      white-space: pre-wrap;
    }
    
    .references {
      margin-top: 20px;
      white-space: pre-wrap;
    }
    
    @media print {
      body {
        padding: 0;
      }
      
      .no-print {
        display: none;
      }
    }
  </style>
</head>
<body>
  <h1>${paper.title}</h1>
  
  <p class="author"><strong>Author:</strong> ${paper.author}</p>
  
  <div class="separator"></div>
  
  <div class="abstract-heading">ABSTRACT</div>
  <p>${paper.abstract}</p>
  
  <p class="keywords"><strong>Keywords:</strong> ${paper.keywords.join('; ')}</p>
  
  <div class="separator"></div>
  
  <h2>1. INTRODUCTION</h2>
  <p>${paper.introduction}</p>
  
  <h2>2. LITERATURE REVIEW</h2>
  <p>${paper.literatureReview}</p>
  
  <h2>3. GOVERNMENT/LEGAL FRAMEWORK</h2>
  <p>${paper.governmentFramework}</p>
  
  <h2>4. FACTORS AFFECTING THE ISSUE</h2>
  <p>${paper.factors}</p>
  
  <h2>5. COMPARATIVE ANALYSIS</h2>
  <p>${paper.comparativeAnalysis}</p>
  
  <h2>6. OBJECTIVES OF THE STUDY</h2>
  <div class="objectives">${paper.objectives}</div>
  
  <h2>7. METHODOLOGY</h2>
  <p>${paper.methodology}</p>
  
  <h2>8. DATA ANALYSIS</h2>
  <p>${paper.dataAnalysis}</p>
  
  <h2>9. RESULTS</h2>
  <p>${paper.results}</p>
  
  <h2>10. DISCUSSION</h2>
  <p>${paper.discussion}</p>
  
  <h2>11. POLICY RECOMMENDATIONS</h2>
  <p>${paper.policyRecommendations}</p>
  
  <h2>12. CONCLUSION</h2>
  <p>${paper.conclusion}</p>
  
  <div class="separator"></div>
  
  <h2>REFERENCES</h2>
  <div class="references">${paper.citations}</div>
</body>
</html>
  `.trim();
}

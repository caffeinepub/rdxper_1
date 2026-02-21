import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ResearchPaper {
    governmentFramework: string;
    title: string;
    policyRecommendations: string;
    dataAnalysis: string;
    conclusion: string;
    results: string;
    author: string;
    keywords: Array<string>;
    introduction: string;
    comparativeAnalysis: string;
    factorsAffecting: string;
    literatureReview: string;
    abstract: string;
    discussion: string;
    citations: Array<string>;
    methodology: string;
    objectives: Array<string>;
}
export interface backendInterface {
    downloadResearchPaper(): Promise<string>;
    getResearchPaper(): Promise<ResearchPaper>;
    getResearchPaperFields(): Promise<{
        governmentFramework: string;
        title: string;
        policyRecommendations: string;
        dataAnalysis: string;
        conclusion: string;
        results: string;
        author: string;
        keywords: Array<string>;
        introduction: string;
        comparativeAnalysis: string;
        factorsAffecting: string;
        literatureReview: string;
        abstract: string;
        discussion: string;
        citations: Array<string>;
        methodology: string;
        objectives: Array<string>;
    }>;
    isResearchPaperSaved(): Promise<boolean>;
    saveResearchPaper(title: string, author: string, abstract: string, keywords: Array<string>, introduction: string, governmentFramework: string, factorsAffecting: string, comparativeAnalysis: string, objectives: Array<string>, literatureReview: string, methodology: string, dataAnalysis: string, results: string, discussion: string, policyRecommendations: string, conclusion: string, citations: Array<string>): Promise<void>;
}

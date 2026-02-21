import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface ResearchPaper {
    governmentFramework: string;
    title: string;
    topic: string;
    wordCount: bigint;
    policyRecommendations: string;
    dataAnalysis: string;
    createdAt: bigint;
    conclusion: string;
    results: string;
    author: string;
    keywords: Array<string>;
    introduction: string;
    comparativeAnalysis: string;
    literatureReview: string;
    factors: string;
    abstract: string;
    discussion: string;
    citations: string;
    methodology: string;
    objectives: string;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface backendInterface {
    createResearchPaper(title: string, topic: string, abstract: string, keywords: Array<string>, introduction: string, governmentFramework: string, factors: string, comparativeAnalysis: string, objectives: string, literatureReview: string, methodology: string, dataAnalysis: string, results: string, discussion: string, policyRecommendations: string, conclusion: string, citations: string, author: string): Promise<ResearchPaper>;
    downloadResearchPaper(): Promise<string>;
    getAccessHistory(): Promise<Array<bigint>>;
    getApiKey(): Promise<string>;
    getResearchPaper(): Promise<ResearchPaper>;
    getResearchPaperFields(): Promise<{
        governmentFramework: string;
        title: string;
        topic: string;
        wordCount: bigint;
        policyRecommendations: string;
        dataAnalysis: string;
        createdAt: bigint;
        conclusion: string;
        results: string;
        author: string;
        keywords: Array<string>;
        introduction: string;
        comparativeAnalysis: string;
        literatureReview: string;
        factors: string;
        abstract: string;
        discussion: string;
        citations: string;
        methodology: string;
        objectives: string;
    }>;
    isResearchPaperSaved(): Promise<boolean>;
    recordAccess(): Promise<void>;
    saveResearchPaper(title: string, topic: string, abstract: string, keywords: Array<string>, introduction: string, governmentFramework: string, factors: string, comparativeAnalysis: string, objectives: string, literatureReview: string, methodology: string, dataAnalysis: string, results: string, discussion: string, policyRecommendations: string, conclusion: string, citations: string, author: string): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
}

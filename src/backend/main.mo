import Map "mo:core/Map";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type ResearchPaper = {
    title : Text;
    author : Text;
    abstract : Text;
    keywords : [Text];
    introduction : Text;
    governmentFramework : Text;
    factorsAffecting : Text;
    comparativeAnalysis : Text;
    objectives : [Text];
    literatureReview : Text;
    methodology : Text;
    dataAnalysis : Text;
    results : Text;
    discussion : Text;
    policyRecommendations : Text;
    conclusion : Text;
    citations : [Text];
  };

  let papers = Map.empty<Principal, ResearchPaper>();

  public query ({ caller }) func getResearchPaper() : async ResearchPaper {
    switch (papers.get(caller)) {
      case (null) { Runtime.trap("No research paper found for user.") };
      case (?paper) { paper };
    };
  };

  public query ({ caller }) func getResearchPaperFields() : async {
    title : Text;
    author : Text;
    abstract : Text;
    keywords : [Text];
    introduction : Text;
    governmentFramework : Text;
    factorsAffecting : Text;
    comparativeAnalysis : Text;
    objectives : [Text];
    literatureReview : Text;
    methodology : Text;
    dataAnalysis : Text;
    results : Text;
    discussion : Text;
    policyRecommendations : Text;
    conclusion : Text;
    citations : [Text];
  } {
    let paper = switch (papers.get(caller)) {
      case (null) { Runtime.trap("Research paper not found for current user.") };
      case (?paper) { paper };
    };

    {
      title = paper.title;
      author = paper.author;
      abstract = paper.abstract;
      keywords = paper.keywords;
      introduction = paper.introduction;
      governmentFramework = paper.governmentFramework;
      factorsAffecting = paper.factorsAffecting;
      comparativeAnalysis = paper.comparativeAnalysis;
      objectives = paper.objectives;
      literatureReview = paper.literatureReview;
      methodology = paper.methodology;
      dataAnalysis = paper.dataAnalysis;
      results = paper.results;
      discussion = paper.discussion;
      policyRecommendations = paper.policyRecommendations;
      conclusion = paper.conclusion;
      citations = paper.citations;
    };
  };

  public shared ({ caller }) func saveResearchPaper(
    title : Text,
    author : Text,
    abstract : Text,
    keywords : [Text],
    introduction : Text,
    governmentFramework : Text,
    factorsAffecting : Text,
    comparativeAnalysis : Text,
    objectives : [Text],
    literatureReview : Text,
    methodology : Text,
    dataAnalysis : Text,
    results : Text,
    discussion : Text,
    policyRecommendations : Text,
    conclusion : Text,
    citations : [Text],
  ) : async () {
    let researchPaper : ResearchPaper = {
      title;
      author;
      abstract;
      keywords;
      introduction;
      governmentFramework;
      factorsAffecting;
      comparativeAnalysis;
      objectives;
      literatureReview;
      methodology;
      dataAnalysis;
      results;
      discussion;
      policyRecommendations;
      conclusion;
      citations;
    };

    papers.add(caller, researchPaper);
  };

  public query ({ caller }) func isResearchPaperSaved() : async Bool {
    papers.containsKey(caller);
  };

  public query ({ caller }) func downloadResearchPaper() : async Text {
    let paper = switch (papers.get(caller)) {
      case (null) { Runtime.trap("Research paper not found for current user.") };
      case (?paper) { paper };
    };
    paper.title;
  };
};

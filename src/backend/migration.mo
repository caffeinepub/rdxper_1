import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";

module {
  type ResearchPaper = {
    title : Text;
    topic : Text;
    abstract : Text;
    keywords : [Text];
    introduction : Text;
    governmentFramework : Text;
    factors : Text;
    comparativeAnalysis : Text;
    objectives : Text;
    literatureReview : Text;
    methodology : Text;
    dataAnalysis : Text;
    results : Text;
    discussion : Text;
    policyRecommendations : Text;
    conclusion : Text;
    citations : Text;
    author : Text;
    wordCount : Nat;
    createdAt : Int;
  };

  type OldActor = {
    papers : Map.Map<Principal, ResearchPaper>;
    editHistories : Map.Map<Principal, List.List<Text>>;
    accessLogs : Map.Map<Principal, List.List<Int>>;
    editCount : Nat;
    wordCountLastPaper : Nat;
    geminiApiEndpoint : Text;
    googleApiKey : Text;
  };

  type NewActor = {
    papers : Map.Map<Principal, ResearchPaper>;
    editHistories : Map.Map<Principal, List.List<Text>>;
    accessLogs : Map.Map<Principal, List.List<Int>>;
    editCount : Nat;
    wordCountLastPaper : Nat;
  };

  public func run(old : OldActor) : NewActor {
    {
      papers = old.papers;
      editHistories = old.editHistories;
      accessLogs = old.accessLogs;
      editCount = old.editCount;
      wordCountLastPaper = old.wordCountLastPaper;
    };
  };
};

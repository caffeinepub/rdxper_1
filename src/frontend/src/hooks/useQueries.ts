import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ResearchPaper } from '../backend';

export function usePaperData() {
  const { actor, isFetching } = useActor();

  return useQuery<ResearchPaper>({
    queryKey: ['researchPaper'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.getResearchPaper();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCheckPaperSaved() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['paperSaved'],
    queryFn: async () => {
      if (!actor) return false;
      return await actor.isResearchPaperSaved();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSavePaper() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (paper: Omit<ResearchPaper, 'citations'> & { citations?: string[] }) => {
      if (!actor) throw new Error('Actor not initialized');

      await actor.saveResearchPaper(
        paper.title,
        paper.author,
        paper.abstract,
        paper.keywords,
        paper.introduction,
        paper.governmentFramework,
        paper.factorsAffecting,
        paper.comparativeAnalysis,
        paper.objectives,
        paper.literatureReview,
        paper.methodology,
        paper.dataAnalysis,
        paper.results,
        paper.discussion,
        paper.policyRecommendations,
        paper.conclusion,
        paper.citations || []
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['researchPaper'] });
      queryClient.invalidateQueries({ queryKey: ['paperSaved'] });
    },
  });
}

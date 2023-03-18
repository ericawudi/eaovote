import { useCompetitionContext } from "../index/competition-provider";
export default function useCategoryLogicHook(id) {
  const { state, handlers } = useCompetitionContext();
  const { showParticipants, hideParticipants } = handlers;
  const { openedCategories } = state.categorySlice;

  const isShowParticipants = openedCategories.includes(id);

  const toggleShowParticipants = () =>
    isShowParticipants ? hideParticipants(id) : showParticipants(id);

  return { isShowParticipants, toggleShowParticipants };
}

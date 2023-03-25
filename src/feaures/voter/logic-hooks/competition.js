import { useSelector } from "react-redux";

export default function useCompetitionHeaderLogicHook() {
  const { votes } = useSelector((state) => state.votesSlice);

  const submitVotes = () => console.log("submitting votes...", votes);

  return { submitVotes };
}

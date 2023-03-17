import { useCompetitionContext } from "../index/competition-provider";
import Category from "./category";

export default function Categories() {
  const { submitVotes } = useCompetitionContext();

  return (
    <div>
      <Category />
      <Category />
      <button onClick={submitVotes}>Submit Votes</button>
    </div>
  );
}

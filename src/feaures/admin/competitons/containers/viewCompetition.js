import ViewActorTemplate from "../../components/viewActorTemplate";
import { useCompetitionsContext } from "../context/competionProvider";

export default function ViewCompetition() {
  const { competitionsState } = useCompetitionsContext();
  const { selectedCompetition } = competitionsState.state;
  return (
    <ViewActorTemplate
      actor="Competition"
      keys={["name", "admin"]}
      details={selectedCompetition}
    />
  );
}

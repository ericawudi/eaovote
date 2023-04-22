import ViewActorTemplate from "../../components/viewActorTemplate";
import { useVotersContext } from "../context/voterProvider";

export default function ViewVoter() {
  const { votersState } = useVotersContext();
  const { selectedVoter } = votersState.state;
  return (
    <ViewActorTemplate
      actor="Voter"
      keys={["username", "fullname", "email", "msisdn"]}
      details={selectedVoter}
    />
  );
}

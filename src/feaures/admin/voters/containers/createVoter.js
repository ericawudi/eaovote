import CreateAndEditVoterTemplate from "./createAndEditVoterWrapper";
import { VOTER_ACTIONS } from "../logic-hooks/createAndEditVoter";

export default function CreateVoter() {
  return <CreateAndEditVoterTemplate action={VOTER_ACTIONS.create} />;
}

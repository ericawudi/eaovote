import CreateAndEditVoterTemplate from "./createAndEditVoterWrapper";
import { VOTER_ACTIONS } from "../logic-hooks/createAndEditVoter";

export default function EditVoter({ voter }) {
  return (
    <CreateAndEditVoterTemplate action={VOTER_ACTIONS.edit} voter={voter} />
  );
}

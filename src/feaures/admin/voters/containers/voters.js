import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateVoter from "./createVoter";
import EditVoter from "./editVoter";
import useVotersLogicHook from "../logic-hooks/voters";

export default function Voters() {
  const { state, modal, handlers } = useVotersLogicHook();
  const { voters, selectedVoter, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    showEditContent,
    // showDeleteContent,
    // showViewContent,
  } = modal;

  const data = voters.map((voter) => {
    const { id, username, fullname, email, msisdn } = voter;
    return [
      username,
      fullname,
      email,
      msisdn,
      <ActionButtons
        onEdit={() => showActionModal(ACTIONS.editActor, id)}
        onView={() => showActionModal(ACTIONS.viewActor, id)}
        onDelete={() => showActionModal(ACTIONS.deleteActor, id)}
      />,
    ];
  });
  const voterCount = voters.length;

  return (
    <PageTemplateLayout
      helperText={`There are ${voterCount} voters`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateVoter />}
        {showEditContent && <EditVoter voter={selectedVoter} />}
        {/*{showDeleteContent && <DeleteCompetition />}
        {showViewContent && <ViewCompetition />} */}
      </CustomModal>
    </PageTemplateLayout>
  );
}

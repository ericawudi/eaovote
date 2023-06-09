import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateVoter from "./createVoter";
import useVotersLogicHook from "../logic-hooks/voters";

export default function Voters() {
  const { state, modal, handlers } = useVotersLogicHook();
  const { voters, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    // showEditContent,
    // showDeleteContent,
    // showViewContent,
  } = modal;

  const data = voters.map((row, idx) => [
    ...row,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, idx)}
      onView={() => showActionModal(ACTIONS.viewActor, idx)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, idx)}
    />,
  ]);
  const voterCount = voters.length;

  return (
    <PageTemplateLayout
      helperText={`There are ${voterCount} competitions`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateVoter />}
        {/* {showEditContent && <EditCompetition />}
        {showDeleteContent && <DeleteCompetition />}
        {showViewContent && <ViewCompetition />} */}
      </CustomModal>
    </PageTemplateLayout>
  );
}

import CustomModal from "../../components/custom-modal";
import PageTemplateLayout from "../../components/page-layout-template";
import DataTable from "../../components/mui-data-table";
import ActionButtons from "../../components/action-buttons";
import CreateVoter from "./create-voter";
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
      helperText={`There are ${voterCount} voters`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateVoter />}
        {/* {showEditContent && <EditVoter />}
        {showDeleteContent && <DeleteVoter />}
        {showViewContent && <ViewVoter />} */}
      </CustomModal>
    </PageTemplateLayout>
  );
}

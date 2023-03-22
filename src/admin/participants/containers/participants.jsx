import CustomModal from "../../components/custom-modal";
import PageTemplateLayout from "../../components/page-layout-template";
import DataTable from "../../components/mui-data-table";
import ActionButtons from "../../components/action-buttons";
import CreateParticipant from "./create-participant";
import useParticipantLogicHook from "../logic-hooks/participants";

export default function Participants() {
  const { state, modal, handlers } = useParticipantLogicHook();
  const { participants, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    // showEditContent,
    // showDeleteContent,
    // showViewContent,
  } = modal;

  const data = participants.map((row, idx) => [
    ...row,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, idx)}
      onView={() => showActionModal(ACTIONS.viewActor, idx)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, idx)}
    />,
  ]);
  const participantCount = participants.length;

  return (
    <PageTemplateLayout
      helperText={`There are ${participantCount} participants`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateParticipant />}
        {/* {showEditContent && <EditParticipant />}
        {showDeleteContent && <DeleteParticipant />}
        {showViewContent && <ViewParticipant />} */}
      </CustomModal>
    </PageTemplateLayout>
  );
}

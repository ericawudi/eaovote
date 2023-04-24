import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateParticipant from "./createParticipant";
import EditParticipant from "./editParticipant";
import DeleteParticipant from "./deleteParticipant";
import ViewParticipant from "./viewParticipant";
import ParticipantsContextProvider, {
  useParticipantContext,
} from "../context/participantProvider";

function ParticipantsComponent() {
  const { participantsState } = useParticipantContext();
  const { state, modal, handlers } = participantsState;
  const { participants, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    showEditContent,
    showDeleteContent,
    showViewContent,
  } = modal;

  const data = participants.map(({ fullname, competition, category, id }) => [
    fullname,
    competition,
    category,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, id)}
      onView={() => showActionModal(ACTIONS.viewActor, id)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, id)}
    />,
  ]);
  const participantCount = participants.length;

  return (
    <PageTemplateLayout
      helperText={`There are ${participantCount} competitions`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateParticipant />}
        {showEditContent && <EditParticipant />}
        {showDeleteContent && <DeleteParticipant />}
        {showViewContent && <ViewParticipant />}
      </CustomModal>
    </PageTemplateLayout>
  );
}

export default function Participants() {
  return (
    <ParticipantsContextProvider>
      <ParticipantsComponent />
    </ParticipantsContextProvider>
  );
}

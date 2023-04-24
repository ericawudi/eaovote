import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateCompetition from "./createCompetition";
import EditCompetition from "./editCompetition";
import DeleteCompetition from "./deleteCompetition";
import ViewCompetition from "./viewCompetition";
import CompetitionsContextProvider, {
  useCompetitionsContext,
} from "../context/competionProvider";

function CompetitionsComponent() {
  const { competitionsState } = useCompetitionsContext();
  const { state, handlers, modal } = competitionsState;
  const { competitions, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    showEditContent,
    showDeleteContent,
    showViewContent,
  } = modal;

  const data = competitions.map(({ id, name, admin }) => [
    name,
    admin,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, id)}
      onView={() => showActionModal(ACTIONS.viewActor, id)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, id)}
    />,
  ]);
  const competitionCount = competitions.length;

  return (
    <PageTemplateLayout
      helperText={`There are ${competitionCount} competitions`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateCompetition />}
        {showEditContent && <EditCompetition />}
        {showDeleteContent && <DeleteCompetition />}
        {showViewContent && <ViewCompetition />}
      </CustomModal>
    </PageTemplateLayout>
  );
}

export default function Competitons() {
  return (
    <CompetitionsContextProvider>
      <CompetitionsComponent />
    </CompetitionsContextProvider>
  );
}

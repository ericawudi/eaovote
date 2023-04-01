import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateCompetition from "./createCompetition";
import useCompetitionLogicHook from "../logic-hooks/competition";

export default function Competitions() {
  const { state, modal, handlers } = useCompetitionLogicHook();
  const { competitions, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    // showEditContent,
    // showDeleteContent,
    // showViewContent,
  } = modal;

  const data = competitions.map((row, idx) => [
    ...row,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, idx)}
      onView={() => showActionModal(ACTIONS.viewActor, idx)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, idx)}
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
        {/* {showEditContent && <EditCompetition />}
        {showDeleteContent && <DeleteCompetition />}
        {showViewContent && <ViewCompetition />} */}
      </CustomModal>
    </PageTemplateLayout>
  );
}

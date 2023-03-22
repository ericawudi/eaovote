import CustomModal from "../../components/custom-modal";
import PageTemplateLayout from "../../components/page-layout-template";
import DataTable from "../../components/mui-data-table";
import ActionButtons from "../../components/action-buttons";
import CreateCompetition from "./create-competition";
import useCompetitionLogic from "../logic-hooks/competition";

export default function Admins() {
  const { state, modal, handlers } = useCompetitionLogic();
  const { admins, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    // showEditContent,
    // showDeleteContent,
    // showViewContent,
  } = modal;

  const data = admins.map((row, idx) => [
    ...row,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, idx)}
      onView={() => showActionModal(ACTIONS.viewActor, idx)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, idx)}
    />,
  ]);
  const adminCount = admins.length;

  return (
    <PageTemplateLayout
      helperText={`There are ${adminCount} competitions`}
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

import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateAdmin from "./createAdmin";
import EditAdmin from "./editAdmin";
import DeleteAdmin from "./deleteAdmin";
import ViewAdmin from "./viewAdmin";
import useAdminLogic from "../logic-hooks/admins";

export default function Admins() {
  const { state, modal, handlers } = useAdminLogic();
  const { admins, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    showEditContent,
    showDeleteContent,
    showViewContent,
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
      helperText={`There are ${adminCount} admins`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateAdmin />}
        {showEditContent && <EditAdmin />}
        {showDeleteContent && <DeleteAdmin />}
        {showViewContent && <ViewAdmin />}
      </CustomModal>
    </PageTemplateLayout>
  );
}

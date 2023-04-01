import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateCategory from "./createCategory";
import useCategoryLogicHook from "../logic-hooks/category";

export default function Categories() {
  const { state, modal, handlers } = useCategoryLogicHook();
  const { categories, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    // showEditContent,
    // showDeleteContent,
    // showViewContent,
  } = modal;

  const data = categories.map((row, idx) => [
    ...row,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, idx)}
      onView={() => showActionModal(ACTIONS.viewActor, idx)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, idx)}
    />,
  ]);
  const categoryCount = categories.length;

  return (
    <PageTemplateLayout
      helperText={`There are ${categoryCount} categories`}
      createButtonClick={() => showActionModal(ACTIONS.createActor)}
    >
      <DataTable title={TITLE} columns={columns} data={data} />
      <CustomModal open={showModal} handleClose={closeActionModal}>
        {showCreateContent && <CreateCategory />}
        {/* {showEditContent && <EditCategory />}
        {showDeleteContent && <DeleteCategory />}
        {showViewContent && <ViewCategory />} */}
      </CustomModal>
    </PageTemplateLayout>
  );
}

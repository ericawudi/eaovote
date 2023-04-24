import CustomModal from "../../components/customModal";
import PageTemplateLayout from "../../components/pageLayoutTemplate";
import DataTable from "../../components/muiDataTable";
import ActionButtons from "../../components/actionButtons";
import CreateCategory from "./createCategory";
import EditCategory from "./editCategory";
import DeleteCategory from "./deleteCategory";
import ViewCategory from "./viewCategory";
import CategoriesContextProvider, {
  useCategoriesContext,
} from "../context/categoryProvider";

function CategoriesComponent() {
  const { categoriesState } = useCategoriesContext();
  const { state, modal, handlers } = categoriesState;
  const { categories, columns, TITLE } = state;
  const { showActionModal, closeActionModal } = handlers;
  const {
    ACTIONS,
    showModal,
    showCreateContent,
    showEditContent,
    showDeleteContent,
    showViewContent,
  } = modal;

  const data = categories.map(({ id, name, competition }) => [
    name,
    competition,
    <ActionButtons
      onEdit={() => showActionModal(ACTIONS.editActor, id)}
      onView={() => showActionModal(ACTIONS.viewActor, id)}
      onDelete={() => showActionModal(ACTIONS.deleteActor, id)}
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
        {showEditContent && <EditCategory />}
        {showDeleteContent && <DeleteCategory />}
        {showViewContent && <ViewCategory />}
      </CustomModal>
    </PageTemplateLayout>
  );
}

export default function Categories() {
  return (
    <CategoriesContextProvider>
      <CategoriesComponent />
    </CategoriesContextProvider>
  );
}

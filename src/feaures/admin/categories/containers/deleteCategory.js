import DeleteActorTemplate from "../../components/deleteActorTemplate";
import { useCategoriesContext } from "../context/categoryProvider";

export default function DeleteCategory() {
  const { categoriesState, deleteCategoryState } = useCategoriesContext();
  const { selectedCategory } = categoriesState.state;
  const { handleCancel, handleDelete } = deleteCategoryState;

  return (
    <DeleteActorTemplate
      actor="Competition"
      name={selectedCategory.name}
      cancel={handleCancel}
      confirm={handleDelete}
    />
  );
}

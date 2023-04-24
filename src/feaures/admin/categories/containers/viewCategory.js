import ViewActorTemplate from "../../components/viewActorTemplate";
import { useCategoriesContext } from "../context/categoryProvider";

export default function ViewCategory() {
  const { categoriesState } = useCategoriesContext();
  const { selectedCategory } = categoriesState.state;
  return (
    <ViewActorTemplate
      actor="Competition"
      keys={["name", "competition"]}
      details={selectedCategory}
    />
  );
}

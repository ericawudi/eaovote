import { createContext, useContext } from "react";
import useCategoriesLogic from "../logic-hooks/category";
import useCreateAndEditCategoryLogic from "../logic-hooks/createAndEditCategory";
import useDeleteCategoryLogic from "../logic-hooks/deleteCategory";
import { useAppContext } from "../../../../contest/AppContextProvider";

const CategoriesContext = createContext();
export const useCategoriesContext = () => useContext(CategoriesContext);

export default function CategoriesContextProvider({ children }) {
  const { addNotification } = useAppContext();
  const categoriesState = useCategoriesLogic(addNotification);
  const { closeActionModal } = categoriesState.handlers;
  const deleteCategoryState = useDeleteCategoryLogic({
    closeActionModal,
    addNotification,
  });
  const createAndEditCategoryState = useCreateAndEditCategoryLogic({
    addNotification,
    closeActionModal,
    Categorie: categoriesState.state.selectedCategory,
  });

  const state = {
    categoriesState,
    createAndEditCategoryState,
    deleteCategoryState,
  };

  return (
    <CategoriesContext.Provider value={state}>
      {children}
    </CategoriesContext.Provider>
  );
}

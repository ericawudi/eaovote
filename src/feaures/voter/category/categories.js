import Category from "./category";
import useCategoriesLogicHook from "../logic-hooks/categories";
import classes from "../styles/voter.module.css";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";

export default function Categories() {
  const {
    categories,
    isLoading,
    isError,
    error,
    isOpened,
    toggleShowParticipants,
  } = useCategoriesLogicHook();

  if (isLoading) {
    return (
      <div className={classes.comp_fetch}>
        <Loader fetching="categories" />
      </div>
    );
  }
  if (isError) {
    return <Error message={error?.message} />;
  }
  return (
    <>
      {categories?.data?.map((cat, idx) => (
        <Category
          key={`${cat.id}_${idx}`}
          category={cat}
          showParticipants={isOpened(`${cat.id}_${idx}`)}
          toggleOpen={() => toggleShowParticipants(`${cat.id}_${idx}`)}
        />
      ))}
    </>
  );
}

import Category from "./category";
import useCategoryLogicHook from "../logic-hooks/category";
import classes from "../styles/voter.module.css";
import Loader from "../../../components/Loader/Loader";

export default function Categories() {
  const { categories, isLoading, isError, isOpened, toggleShowParticipants } =
    useCategoryLogicHook();
  if (isLoading) {
    return (
      <div className={classes.comp_fetch}>
        <Loader fetching="competitions" />
      </div>
    );
  }
  if (isError) {
    return <div>Error fetching categories</div>;
  }
  return categories?.data?.map((cat, idx) => (
    <Category
      key={`${cat.id}_${idx}`}
      category={cat}
      showParticipants={isOpened(`${cat.id}_${idx}`)}
      toggleOpen={() => toggleShowParticipants(`${cat.id}_${idx}`)}
    />
  ));
}

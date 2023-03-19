import Category from "./category";
import useCategoryLogicHook from "../logic-hooks/category";

export default function Categories() {
  const { categories, isOpened, toggleShowParticipants } =
    useCategoryLogicHook();

  return (
    <div>
      {categories.map((cat, idx) => (
        <Category
          key={`${cat.id}_${idx}`}
          name={cat.name}
          showParticipants={isOpened(`${cat.id}_${idx}`)}
          toggleOpen={() => toggleShowParticipants(`${cat.id}_${idx}`)}
        />
      ))}
    </div>
  );
}

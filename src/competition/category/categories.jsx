import Category from "./category";

export default function Categories() {
  const categories = ["01", "02"];

  return (
    <div>
      {categories.map((idx) => (
        <Category key={idx} id={idx} />
      ))}
    </div>
  );
}

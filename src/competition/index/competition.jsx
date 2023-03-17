import Categories from "../category/categories";
import CompetitionProvider from "./competition-provider";

export default function Competition() {
  return (
    <CompetitionProvider>
      <Categories />
    </CompetitionProvider>
  );
}

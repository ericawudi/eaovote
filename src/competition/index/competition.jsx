import CompetitionProvider from "./competition-provider";
import Categories from "../category/categories";

export default function Competition() {
  return (
    <CompetitionProvider>
      <Categories />
    </CompetitionProvider>
  );
}

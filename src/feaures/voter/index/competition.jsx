import Categories from "../category/categories";
import CompetitionHeader from "./competition-header";
import classes from "../styles/competition.module.css";

export default function Competition() {
  return (
    <div className={classes.competition__main}>
      <CompetitionHeader />
      <div>
        <Categories />
      </div>
    </div>
  );
}

import Categories from "../feaures/voter/category/categories";
import CompetitionHeader from "../feaures/voter/index/competitionHeader";
import classes from "../feaures/voter/styles/voter.module.css";

export default function VoterDashboard() {
  return (
    <>
      <div className={classes.competition__main}>
        <CompetitionHeader />
        <Categories />
      </div>
    </>
  );
}

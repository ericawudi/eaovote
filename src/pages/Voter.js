import Categories from "../feaures/voter/category/categories";
import VoterContextProvider from "../feaures/voter/context";
import CompetitionHeader from "../feaures/voter/index/competitionHeader";
import classes from "../feaures/voter/styles/voter.module.css";

export default function VoterDashboard() {
  return (
    <VoterContextProvider>
      <div className={classes.competition__main}>
        <CompetitionHeader />
        <Categories />
      </div>
    </VoterContextProvider>
  );
}

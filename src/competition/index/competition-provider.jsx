import { createContext, useContext } from "react";
import useContestLogicHook from "../logic-hooks/contest-logic-hook";

const CompetitionContext = createContext();
export const useCompetitionContext = () => useContext(CompetitionContext);

export default function CompetitionProvider({ children }) {
  const value = useContestLogicHook();
  return (
    <CompetitionContext.Provider value={value}>
      {children}
    </CompetitionContext.Provider>
  );
}

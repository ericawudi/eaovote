import { createContext, useContext } from "react";
import useCompetitionLogicHook from "../logic-hooks/competition";

const CompetitionContext = createContext();
export const useCompetitionContext = () => useContext(CompetitionContext);

export default function CompetitionProvider({ children }) {
  const store = useCompetitionLogicHook();

  console.log({ store });

  return (
    <CompetitionContext.Provider value={store}>
      {children}
    </CompetitionContext.Provider>
  );
}

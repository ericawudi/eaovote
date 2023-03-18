import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCompetionsAPIRequest } from "../../services/user/competitions";
import { setCompetitons } from "../../libs/redux/actions/competitions";

export default function useSidebarLogicHook() {
  const dispatch = useDispatch();
  const { competitions } = useSelector((state) => state.competitionSlice);

  useEffect(() => {
    const getCompetions = async () => {
      const res = await fetchAllCompetionsAPIRequest();
      if (res.err) return console.log({ FETCH_FAILED: res.message });
      return dispatch(setCompetitons(res.data));
    };
    getCompetions();
  }, [dispatch]);

  return competitions;
}

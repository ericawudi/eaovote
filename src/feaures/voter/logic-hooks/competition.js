import { useQueryClient } from "@tanstack/react-query";
import { usePostData } from "../../../hooks/usePostData";
import { useVoterContext } from "../context";
import { useState } from "react";

export default function useCompetitionHeaderLogicHook() {
  const { votes } = useVoterContext();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const bulkVotes = Object.values(votes).map(
    ({ competition_id, category_id, id }) => ({
      competition_id,
      category_id,
      participant_id: id,
    })
  );

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const onSuccessFulCall = (successData) => {
    queryClient.setQueryData("votescast", successData, {
      // cacheTime: 1000,
      // staleTime: 1000,
    });
  };
  const onErrorCall = (error) => {
    setNotificationMessage(error.message);
    setOpen(true);
  };
  const { mutate, isLoading } = usePostData(onSuccessFulCall, onErrorCall);

  const submitVotes = () => {
    console.log(bulkVotes);
    if (bulkVotes.length > 0) {
      mutate({ url: "vote/bulkk", data: bulkVotes });
    }
  };

  return {
    submitVotes,
    isLoading,
    notificationMessage,
    open,
    handleClose,
  };
}

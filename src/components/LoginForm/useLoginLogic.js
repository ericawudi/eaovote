import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import useRQMutation from "../../hooks/useRQMutation";
import {
  getLevelCookie,
  setAuthCookie,
  setLevelCookie,
} from "../../utils/auth";
import {
  NOTIFICATION_ACTIONS,
  NOTIFICATION_SEVERITY,
} from "../Notification/notificationConstants";
import { useAppContext } from "../../contest/AppContextProvider";

export default function useLoginLogic() {
  const { addNotification } = useAppContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onErrorCall = (error) => {
    const err = error?.response?.data?.data || error.message;
    addNotification({
      action: NOTIFICATION_ACTIONS.LOGIN_USER,
      severity: NOTIFICATION_SEVERITY.error,
      message: err,
    });
  };

  const onSuccessFulCall = (data) => {
    // This caches it but redux will be best 'cos i'm unable to set stale and cache time.
    queryClient.setQueryData("login", data, {
      // cacheTime: 1000,
      // staleTime: 1000,
    });
    setAuthCookie(`Bearer ${data?.data?.data?.authToken?.accessToken}`);
    const url = getLevelCookie();
    navigate(`/${url}`);
  };

  const { mutate, isLoading } = useRQMutation({
    onSuccess: onSuccessFulCall,
    onError: onErrorCall,
  });
  const onSubmit = (values) => {
    const { username, password, level } = values;
    setLevelCookie(level);
    mutate({ url: `login/${level}`, data: { username, password } });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return {
    state: {
      register,
      errors,
      isLoading,
    },
    handlers: { handleSubmit, onSubmit },
  };
}

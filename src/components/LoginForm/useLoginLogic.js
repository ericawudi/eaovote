import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
// import { loginUser } from "../../services/loginLogout";
import { usePostData } from "../../hooks/usePostData";
import { setAuthCookie, setLevelCookie } from "../../utils/auth";

export default function useLoginLogic() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("voter");
  const [notificationMessage, setNotificationMessage] = useState("");
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const onErrorCall = (error) => {
    setNotificationMessage(error?.response?.data?.data || error.message);
    setOpen(true);
  };

  const onSuccessFulCall = (data) => {
    // This caches it but redux will be best 'cos i'm unable to set stale and cache time.
    queryClient.setQueryData("login", data, {
      cacheTime: 1000,
      staleTime: 1000,
    });
    setAuthCookie(data?.data?.authToken?.accessToken);
    console.log(data);
    setLevelCookie(url);
    navigate(`/${url}`);
  };

  const { mutate, isLoading, isError, data, error } = usePostData(
    onSuccessFulCall,
    onErrorCall
  );
  const onSubmit = (values, _event) => {
    const loginData = { username: values.username, password: values.password };
    setUrl(values.level);
    mutate({ url: `login/${values.level}`, data: loginData });
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
      open,
      notificationMessage,
    },
    handlers: { handleSubmit, handleClose, onSubmit },
    fetchResponse: {
      isLoading,
      isError,
      data,
      error,
    },
  };
}

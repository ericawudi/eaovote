import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser, setAuthCookie } from "../services/login-logout";
import { setUserInfo } from "../libs/redux/actions/auth";
import { useDispatch } from "react-redux";

export default function useLoginLogic() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values, _event) => {
    setLoading(true);
    const { err, data } = await loginUser(values);

    if (err) {
      const errMesaage = data.errors[0].msg;
      setNotificationMessage(errMesaage);
      setOpen(true);
    } else {
      const { accessToken: authToken } = data.data.authToken;
      setAuthCookie(authToken);
      dispatch(setUserInfo({ ...data.data, authToken }));
      navigate("/");
    }
    setLoading(false);
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
  } = useForm({ defaultValues: { isAdmin: false } });

  return {
    state: {
      register,
      errors,
      loading,
      open,
      notificationMessage,
    },
    handlers: { handleSubmit, handleClose, onSubmit },
  };
}

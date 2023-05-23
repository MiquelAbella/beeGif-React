import { toast } from "react-toastify";

const toastMessageError = (errorMessage) => {
  toast.error(errorMessage, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

const toastMessageSuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export { toastMessageError, toastMessageSuccess };

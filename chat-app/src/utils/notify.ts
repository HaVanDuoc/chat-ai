import { toast, ToastOptions } from "react-toastify";

const option: ToastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

const notify = {
    success: (content: string) => {
        return toast.success(content, option);
    },
    warning: (content: string) => {
        return toast.warning(content, option);
    },
    error: (content: string) => {
        return toast.error(content, option);
    },

}

export default notify
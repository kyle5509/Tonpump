import toast from "react-hot-toast";

export const succcessNotification = (message: string) => {
  toast.success(message);
};
export const errorNotification = (message: string) => {
  toast.error(message);
};

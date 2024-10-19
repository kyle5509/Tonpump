import toast from "react-hot-toast";

export type ErrorType = {
  response?: {
    data?: {
      data?: { errors?: any };
      message: any;
      error?: {} | string[];
      errors?: {};
    };
    status: number;
  };
  message: string;
};
export const errorMessageHandler = (obj: ErrorType) => {
  if (obj.response) {
    if (obj.response.status === 401) {
      return (location.href = "/login");
    }
    if (obj.response.status === 500) {
      return toast.error(obj?.response?.data?.message);
    }
    if (obj.response.status === 404) {
      return toast.error(
        "Page not found, Please contact the site administrator"
      );
    }
    if (obj?.response?.data?.data?.errors) {
      const dataErrors = obj?.response?.data?.data?.errors;
      if (typeof dataErrors === "object") {
        Object.entries(dataErrors)?.forEach(([k, v]) => {
          if (typeof v === "string") toast.error(v);
          else if (Array.isArray(v)) {
            v?.forEach((el) => {
              if (typeof el === "string") {
                toast.error(el);
              } else if (typeof el === "object" && !Array.isArray(el)) {
                Object.entries(el).forEach(([key, val]) => {
                  if (key === "message") {
                    if (typeof val === "string") {
                      toast.error(val);
                    }
                  }
                });
              }
            });
          }
        });
      }
      if (typeof dataErrors === "string") toast.error(dataErrors);
    } else if (obj?.response?.data?.data) {
      const errorData = obj?.response?.data?.data;
      if (typeof errorData === "string") {
        toast.error(errorData);
        return;
      }
      Object.entries(errorData).map(([k, v], idx) => {
        if (Array.isArray(v)) {
          v.forEach((el: string) => toast.error(el));
        } else toast.error(v as string);
      });
    } else if (obj?.response?.data?.error) {
      if (
        typeof obj.response.data.error === "string" &&
        obj.response.data.message
      ) {
        return toast.error(String(obj.response.data.message));
      }
      if (typeof obj.response.data.error === "string") {
        return toast.error(obj.response.data.error);
      }
      if (Array.isArray(obj.response.data.error))
        return toast.error(String(obj.response.data.error));
      Object.entries(obj.response.data.error).map((item: any[], idx) => {
        if (item[1].length > 1) {
          item[1].forEach((el: any) => {
            if (typeof el === "string") {
              toast.error(el);
            } else if (typeof el === "object") {
              Object.entries(el).map((item: any[], idx) => {
                toast.error(item[1]);
              });
            }
          });
        } else {
          toast.error(item[1]);
        }
      });
    } else if (obj?.response?.data?.errors) {
      const errors = obj?.response?.data?.errors;
      if (typeof errors === "object") {
        Object.entries(errors)?.forEach(([k, v]) => {
          if (typeof v === "string") toast.error(v);
          else if (Array.isArray(v)) {
            v?.forEach((el) => {
              if (typeof el === "string") {
                toast.error(el);
              } else if (typeof el === "object" && !Array.isArray(el)) {
                Object.entries(el).forEach(([key, val]) => {
                  if (key === "message") {
                    if (typeof val === "string") {
                      toast.error(val);
                    }
                  }
                });
              }
            });
          }
        });
      }
      if (typeof errors === "string") toast.error(errors);
    } else if (obj?.response?.data?.message) {
      toast.error(obj?.response?.data?.message);
    }
  } else toast.error(obj.message);
};

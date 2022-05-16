import types from "../types/types";

export const openAlert = (open, message, type) => {
  return {
    type: types.openAlert,
    payload: {
      open,
      message,
      type,
    },
  };
};

export const closeAlert = () => {
  return {
    type: types.openAlert,
    payload: {
      open: false,
      message: "",
      type: "success",
    },
  };
};

import types from "../types/types";

const initialstate = {
  message: "",
  type: "success",
  open: false,
};

export const alertReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.openAlert:
      return {
        open: action.payload.open,
        message: action.payload.message,
        type: action.payload.type,
      };

    default:
      return state;
  }
};

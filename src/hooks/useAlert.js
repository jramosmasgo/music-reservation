import { Alert, Grow } from "@mui/material";
import { useState } from "react";

const useShowAlert = ({ message, type = "success", variant = "filled" }) => {
  const [openAlert, setOpenAlert] = useState(false);

  const Component = () =>
    openAlert ? (
      <Grow in={openAlert}>
        <Alert variant={variant} severity={type}>
          {message}
        </Alert>
      </Grow>
    ) : null;

  return [setOpenAlert, Component];
};

export default useShowAlert;

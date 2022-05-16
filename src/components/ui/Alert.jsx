import { Snackbar } from "@mui/material";
import React from "react";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { closeAlert } from "../../redux/actions/alert";

function Alert({ message = "", type = "success", open = false }) {
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeAlert());
  };

  const AlertComponent = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <AlertComponent
        style={{ width: "50vw" }}
        onClose={handleClose}
        severity={type}
      >
        {message}
      </AlertComponent>
    </Snackbar>
  );
}

export default Alert;

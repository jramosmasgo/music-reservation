import { Fade, Modal } from "@mui/material";
import React from "react";

function CustomModal({ open = false, handleCloseModal, children }) {
  return (
    <Modal
      sx={{ background: "rgba(0, 0, 0, 0.6)" }}
      open={open}
      closeAfterTransition
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <div>{children}</div>
      </Fade>
    </Modal>
  );
}

export default CustomModal;

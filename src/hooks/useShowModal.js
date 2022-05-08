import { useState } from "react";
import CustomModal from "../components/ui/CustomModal";

const useShowModal = ({ Component, handleClose }) => {
  const [open, SetOpen] = useState(false);

  const Modal = () => (
    <CustomModal open={open} handleCloseModal={handleClose}>
      <>{Component}</>
    </CustomModal>
  );

  return [Modal, SetOpen];
};

export default useShowModal;

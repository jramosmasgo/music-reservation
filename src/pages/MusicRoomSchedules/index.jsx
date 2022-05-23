import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card, CardContent, Modal } from "@mui/material";
import { CustomCalendar } from "../../styles/calendar/calendarStyle";
import TitlePage from "../../components/ui/TitlePage";
import { ModalBox } from "../../styles/shared/modal";
import AddReservationModal from "./components/AddReservationModal";
import { useParams } from "react-router-dom";
import { getReservationsByMusicRoom } from "../../api/reservation/reservationService";

const localizer = momentLocalizer(moment);

function MusicRoomSchedules() {
  const { idRoom } = useParams();
  const [dateSelect, setDateSelect] = useState(moment().toDate());
  const [openModal, setOpenModal] = useState(false);
  const [reservation, setReservation] = useState([]);

  const getAllReservations = async () => {
    setReservation([]);
    const result = await getReservationsByMusicRoom(idRoom);
    if (result.data.length > 0) {
      result.data.forEach((element) => {
        const itemCalendar = {
          title: "Reserva",
          start: moment(element.date).toDate(),
          end: moment(element.endDate).toDate(),
          bgcolor: "red",
        };
        setReservation((prev) => [...prev, itemCalendar]);
      });
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    getAllReservations();
  };

  const handleSelect = ({ start }) => {
    setDateSelect(start);
    setOpenModal(true);
  };

  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div>
      <TitlePage title="Agregar Nueva Reserva" />
      <Modal onClose={() => setOpenModal(false)} open={openModal}>
        <ModalBox ancho={500}>
          <AddReservationModal
            close={handleCloseModal}
            idMusicRoom={idRoom}
            dateSelect={dateSelect}
          />
        </ModalBox>
      </Modal>
      <Card>
        <CardContent>
          <CustomCalendar
            localizer={localizer}
            events={reservation}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelect}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default MusicRoomSchedules;

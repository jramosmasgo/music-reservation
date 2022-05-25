import { Routes, Route } from "react-router-dom";
import Layout from "../layouts";
import CompaniesOwner from "../pages/CompaniesOwner";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MusicRoomDetails from "../pages/MusicRoomDetails";
import MusicRooms from "../pages/MusicRooms";
import MusicRoomsOwner from "../pages/MusicRoomsOwner";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import { HistoryRouter } from "./HistoryRouter";
import { myHistory } from "./history";
import CreateUpdateCompany from "../pages/CreateUpdateCompany";
import MusicRoomSchedules from "../pages/MusicRoomSchedules";
import Reservations from "../pages/Reservations";
import ReservationOwner from "../pages/ReservationsOwner";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <HistoryRouter history={myHistory}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" render element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="reservations"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />
          <Route path="reservations-owner" element={<ReservationOwner />} />
          <Route path="music-rooms" element={<MusicRooms />} />
          <Route path="room-detail/:idRoom" element={<MusicRoomDetails />} />
          <Route
            path="music-room-schedule/:idRoom"
            element={
              <ProtectedRoute>
                <MusicRoomSchedules />
              </ProtectedRoute>
            }
          />
          <Route path="companies-owner" element={<CompaniesOwner />} />
          <Route path="create-company" element={<CreateUpdateCompany />} />
          <Route
            path="edit-company/:idCompany"
            element={<CreateUpdateCompany />}
          />
          <Route path="music-rooms-owner" element={<MusicRoomsOwner />} />
          <Route path="*" element={<h1> Pagina No encontrada</h1>} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

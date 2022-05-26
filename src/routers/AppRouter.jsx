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
import NotFound from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <HistoryRouter history={myHistory}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" render element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="reservations"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />
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
          <Route
            path="reservations-owner"
            element={
              <ProtectedRoute company={true}>
                <ReservationOwner />
              </ProtectedRoute>
            }
          />
          <Route
            path="companies-owner"
            element={
              <ProtectedRoute company={true}>
                <CompaniesOwner />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-company"
            element={
              <ProtectedRoute company={true}>
                <CreateUpdateCompany />
              </ProtectedRoute>
            }
          />
          <Route
            path="music-rooms-owner"
            element={
              <ProtectedRoute company={true}>
                <MusicRoomsOwner />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit-company/:idCompany"
            element={
              <ProtectedRoute company={true}>
                <CreateUpdateCompany />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="not-found" element={<NotFound />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

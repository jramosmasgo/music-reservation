import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import CompaniesOwner from "../pages/CompaniesOwner";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MusicRoomDetails from "../pages/MusicRoomDetails";
import MusicRooms from "../pages/MusicRooms";
import MusicRoomsOwner from "../pages/MusicRoomsOwner";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
// import your route components too
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="music-rooms" element={<MusicRooms />} />
        <Route path="room-detail/:idRoom" element={<MusicRoomDetails />} />
        <Route path="companies-owner" element={<CompaniesOwner />} />
        <Route path="music-rooms-owner" element={<MusicRoomsOwner />} />
        <Route path="*" element={<h1> Pagina No encontrada</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

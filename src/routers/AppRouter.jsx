import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import Home from "../pages/Home";
import MusicRoomDetails from "../pages/MusicRoomDetails";
// import your route components too
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="room-detail" element={<MusicRoomDetails />} />
        <Route path="*" element={<h1> Pagina No encontrada</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

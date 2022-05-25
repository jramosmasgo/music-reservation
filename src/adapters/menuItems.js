import HomeIcon from "@mui/icons-material/Home";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import EventIcon from "@mui/icons-material/Event";
import BusinessIcon from "@mui/icons-material/Business";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const itemsMenu = [
  {
    idParent: 1,
    title: "Menu",
    protected: false,
    items: [
      {
        id: 1,
        name: "Home",
        location: "/",
        icon: <HomeIcon color="primary" />,
      },
      {
        id: 2,
        name: "Salas",
        location: "/music-rooms",
        icon: <AudiotrackIcon color="primary" />,
      },
      {
        id: 3,
        name: "Reservas",
        location: "/reservations",
        icon: <EventIcon color="primary" />,
      },
    ],
  },
  {
    idParent: 2,
    title: "Company",
    protected: true,
    items: [
      {
        id: 1,
        name: "Mis Companias",
        location: "/companies-owner",
        icon: <BusinessIcon color="primary" />,
      },
      {
        id: 2,
        name: "Mis Salas",
        location: "/music-rooms-owner",
        icon: <LibraryMusicIcon color="primary" />,
      },
      {
        id: 3,
        name: "Reservas",
        location: "/reservations-owner",
        icon: <CalendarMonthIcon color="primary" />,
      },
    ],
  },
];

import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import EventIcon from "@mui/icons-material/Event";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

export const itemsMenu = [
  {
    idParent: 1,
    title: "Menu",
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
        location: "/date",
        icon: <EventIcon color="primary" />,
      },
      {
        name: "Eventos",
        location: "/events",
        icon: <TheaterComedyIcon color="primary" />,
      },
    ],
  },
  {
    idParent: 2,
    title: "Company",
    items: [
      {
        id: 1,
        name: "Companias",
        location: "/companies",
        icon: <InboxIcon color="primary" />,
      },
      {
        id: 2,
        name: "Salas",
        location: "/rooms",
        icon: <InboxIcon color="primary" />,
      },
    ],
  },
];

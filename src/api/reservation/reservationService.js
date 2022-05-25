import serviceAPI from "../config/ApiConfig";

export const saveReservation = async ({
  date,
  band,
  endDate,
  musicRoom,
  state,
}) => {
  try {
    console.log(date, band, endDate, musicRoom, state);
    const result = await serviceAPI.post("/reservation", {
      date,
      endDate,
      band,
      user: "b8713c90-a9fd-45f5-92dc-f1f5ac1284ee",
      musicRoom,
      state,
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getReservationsByMusicRoom = async (idMusicRomm) => {
  try {
    const result = await serviceAPI.get(
      `/reservation/music-room/${idMusicRomm}`
    );
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getReservationsByUser = async () => {
  try {
    const result = await serviceAPI.get(`/reservations/user`);
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateReservation = async (fields, id) => {
  try {
    const result = await serviceAPI.put(`/reservation/${id}`, {
      ...fields,
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

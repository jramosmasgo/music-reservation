import serviceAPI from "../config/ApiConfig";

export const saveMusicRoom = async function ({
  address,
  city,
  country,
  description,
  name,
  phone,
  priceHour,
  currencyWorld,
  openingHours,
  closeHours,
}) {
  try {
    const result = await serviceAPI.post("/music-room", {
      ...arguments[0],
    });
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMusicRoomsByCompany = async (idCompany) => {
  try {
    const result = await serviceAPI.get(`/music-room/company/${idCompany}`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMusicRooms = async () => {
  try {
    const result = await serviceAPI.get(`/music-room`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMusicRoomById = async (idMusicRoom) => {
  try {
    const result = await serviceAPI.get(`/music-room/${idMusicRoom}`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMusicRoomsByUser = async () => {
  try {
    const result = await serviceAPI.get(`/music-room/user/all`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

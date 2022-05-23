import serviceAPI from "../config/ApiConfig";

export const saveRoomImage = async ({ idRoomMusic, image }) => {
  const result = await serviceAPI.post("/room-images", {
    idRoomMusic,
    image,
  });
  return result.data;
};

export const getImagesMusicRoom = async ({ idRoomMusic }) => {
  const result = await serviceAPI.get(`/room-images/${idRoomMusic}`);
  return result.data;
};

export const removeImageMusicRoom = async (id) => {
  try {
    const result = await serviceAPI.delete(`/room-images/${id}`);
    return result.data.data?.url;
  } catch (error) {
    throw new Error(error.message);
  }
};

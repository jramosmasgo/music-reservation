import serviceAPI from "../config/ApiConfig";

export const getImage = async (id) => {
  try {
    const result = await serviceAPI.get(`/image/${id}`);
    return result.data.data?.url;
  } catch (error) {
    throw new Error(error.message);
  }
};

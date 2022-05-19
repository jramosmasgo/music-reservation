import serviceAPI from "../config/ApiConfig";

export const getUserService = async (email) => {
  try {
    const result = await serviceAPI.get(`/user/${email}`, {
      email,
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

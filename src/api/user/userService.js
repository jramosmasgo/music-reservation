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

export const updateImageProfileService = async (image) => {
  try {
    const result = await serviceAPI.put(`/update-image`, {
      image,
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserService = async (data) => {
  try {
    const result = await serviceAPI.put(`/user/update`, {
      ...data,
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

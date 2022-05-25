import serviceAPI from "../config/ApiConfig";

export const loginService = async (email) => {
  try {
    const result = await serviceAPI.post("/sign-in", {
      email,
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registerService = async ({
  uid,
  fullname,
  email,
  emailVerified,
  image,
}) => {
  try {
    const result = await serviceAPI.post("/sign-up", {
      user: {
        uid,
        fullname,
        email,
        emailVerified,
      },
      image,
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registerSocialNetworkService = async ({
  uid,
  fullname,
  email,
  emailVerified,
  phone,
  profileImage,
}) => {
  try {
    const result = await serviceAPI.post("/sign-up/social-network", {
      user: {
        uid,
        fullname,
        email,
        emailVerified,
        phone,
        profileImage,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

import serviceAPI from "../config/ApiConfig";

export const getCollaborator = async (idCompany) => {
  try {
    const result = await serviceAPI.get(`/collaborator/${idCompany}`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const saveCollaborator = async ({ user, company, state }) => {
  try {
    const result = await serviceAPI.post(`/collaborator`, {
      user,
      company,
      state,
    });
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

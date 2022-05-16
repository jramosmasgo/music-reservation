import serviceAPI from "../config/ApiConfig";

export const getCollaborator = async (idCompany) => {
  try {
    const result = await serviceAPI.get(`/collaborator/${idCompany}`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

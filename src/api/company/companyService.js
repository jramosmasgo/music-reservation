import serviceAPI from "../config/ApiConfig";

export const saveCompanyService = async ({
  name,
  property,
  numberDoc,
  validationDoc,
  phone,
  state,
}) => {
  const result = await serviceAPI.post("/company", {
    name,
    property,
    numberDoc,
    validationDoc,
    phone,
    state,
  });

  return result.data;
};

export const getCompanies = async () => {
  const result = await serviceAPI.get("/company");
  return result.data;
};

export const updateLogoCompany = async ({ id, image }) => {
  const result = await serviceAPI.put(`/company/logo/${id}`, {
    image,
  });
  return result.data;
};

export const getCompanyById = async (idCompany) => {
  const result = await serviceAPI.get(`/company/${idCompany}`);
  return result.data;
};

export const updateCompanyService = async ({
  name,
  numberDoc,
  phone,
  idCompany,
}) => {
  const result = await serviceAPI.put(`/company/${idCompany}`, {
    name,
    numberDoc,
    phone,
  });

  return result.data;
};

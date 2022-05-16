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

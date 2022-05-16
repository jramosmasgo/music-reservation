import axios from "axios";

export const getAllCountries = async () => {
  try {
    const result = await axios.get(
      "https://countriesnow.space/api/v0.1/countries"
    );
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCitesByCountry = async (country) => {
  try {
    const result = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/cities",
      { country }
    );

    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};

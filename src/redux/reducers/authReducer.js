import types from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        profileImage: action.payload.profileImage,
        loginSocialNetwork: action.payload.loginSocialNetwork,
        companyCreator: action.payload.companyCreator,
        id: action.payload.id,
      };

    case types.enableRegisterCompany:
      return {
        ...state,
        companyCreator: true,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};

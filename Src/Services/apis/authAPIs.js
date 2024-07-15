import { getRequestWithParams, patchRequest, postRequest } from '../';

export const logInUserApi = payload => postRequest(`users/login`, payload);
export const signUpApi = payload => postRequest(`auth/signUp`, payload);
export const forgetPasswordApi = payload =>
  postRequest(`users/forgetpassword`, payload);
export const resetPasswordApi = payload =>
  postRequest(`users/resetpassword`, payload);
export const verifyOTPAPI = payload => postRequest(`users/otp-verify`, payload);
export const EditProfileAPI = payload => patchRequest(`users/edit/`, payload);
export const UserDataAPI = payload => getRequestWithParams(`users`, payload);
export const googleLogIn = payload => postRequest(`users/google-login`, payload);
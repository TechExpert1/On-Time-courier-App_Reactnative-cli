import {
  getRequest,
  getRequestWithParams,
  patchRequest,
  postRequest,
  putRequest,
} from '../';

export const logInUserApi = payload => postRequest(`auth/logIn`, payload);
export const signUpApi = payload => postRequest(`auth/signUp`, payload);
export const forgetPasswordApi = payload =>
  postRequest(`auth/forgotPass`, payload);
export const resetPasswordApi = (payload, id) =>
  putRequest(`auth/newPassword/${id}`, payload);
export const verifyOTPAPI = payload => patchRequest(`auth/verifyUser`, payload);
export const verifyForgotPasswordOTPAPI = (payload, id) =>
  postRequest(`auth/verifyForgotOtp/${id}`, payload);
// export const EditProfileAPI = payload => patchRequest(`users/edit/`, payload);
export const ChangePasswordAPI = payload =>
  putRequest(`user/changePassword`, payload);
export const getUserAPI = userId => getRequest(`user/getUserById/${userId}`);

export const deleteUserAPI = () => patchRequest(`user/deleteUser`);
// export const googleLogIn = payload => postRequest(`users/google-login`, payload);

export const CustomerUploadPicture = payload => putRequest(`user/editProfile`, payload);

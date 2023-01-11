import { fetchWrapper } from "../helpers/fatch-wrapper";

const baseUrl = `${process.env.REACT_APP_API_URL}/usermodel`;
export const userServices = {
  CreateNewUser,
  signIn,
  getUser,
  logOut,
};

function CreateNewUser(params) {
  return fetchWrapper.post(`${baseUrl}/newuser`, params);
}

function signIn(params) {
  return fetchWrapper.post(`${baseUrl}/signin`, params);
}

function getUser() {
  let use = localStorage.getItem("user");
  let user;
  if (use) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  return user;
}

function logOut() {
  localStorage.setItem("user", "");
  window.location.reload();
}

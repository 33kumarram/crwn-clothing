import { fetchWrapper } from "../helpers/fatch-wrapper";

const baseUrl = `${process.env.REACT_APP_API_URL}/usermodel`;
export const userServices = {
  CreateNewUser,
  signIn,
};

function CreateNewUser(params) {
    return fetchWrapper.post(`${baseUrl}/newuser`, params)
}

function signIn(params){
  return fetchWrapper.post(`${baseUrl}/signin`, params)
}
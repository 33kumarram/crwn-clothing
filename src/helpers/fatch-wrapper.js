import { userServices } from "../services/user.service";

export const fetchWrapper = {
  post,
  get,
  put,
  delete: _delete,
};

function _delete(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type":"application/json; charset=UTF-8", ...authHeader(url) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json; charset=UTF-8", ...authHeader(url) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function get(url) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=UTF-8", ...authHeader(url) },
  };
  return fetch(url, requestOptions).then(handleResponse);
}


function getNoCors(url) {
  const requestOptions = {
    mode: "no-cors",
    method: "GET",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    let data="";
    try{
      data = text && JSON.parse(text);
    }
    catch(e)
    {
      console.log(e)
    }
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    else
    {
      
      return data;
    }

    
  });
}

function authHeader(url) {
  const user = userServices.getUser();
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
  console.log(isLoggedIn,isApiUrl, user)
  if (isLoggedIn && isApiUrl) {
    return { Authorization: user.token };
  } else {
    return {};
  }
}

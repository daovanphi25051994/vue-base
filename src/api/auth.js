import httpRequest from "../request/request";

export function login(data) {
  return httpRequest({
    url: "auth/login",
    method: "post",
    data: data
  });
}

export function register(data) {
  return httpRequest({
    url: "auth/register",
    method: "post",
    data: data
  });
}

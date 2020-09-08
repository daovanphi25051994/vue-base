import Cookies from "js-cookie";

const TOKEN_KEY = "token_key";
const ROLES_KEY = "roles";
const USER_KEY = "user";

export function getToken() {
  return Cookies.get(TOKEN_KEY);
}
export function getRoles() {
  return Cookies.get(ROLES_KEY);
}

export function getUser() {
  return Cookies.get(USER_KEY);
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token);
}

export function setUser(user) {
  return Cookies.set(USER_KEY, user);
}

export function setRoles(roles) {
  return Cookies.set(ROLES_KEY, roles);
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY);
}

export function removeRoles() {
  return Cookies.remove(ROLES_KEY);
}

export function removeUser() {
  return Cookies.remove(USER_KEY);
}
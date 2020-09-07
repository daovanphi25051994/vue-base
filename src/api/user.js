import httpRequest from "../request/request";

export function getInfoUser(id) {
  return httpRequest({
    url: `api/users/${id}/posts`,
    method: "get"
  });
}

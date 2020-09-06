import httpRequest from "../request/request";

export function getInfoUser() {
  return httpRequest({
    url: "users/:id/posts",
    method: "get"
  });
}

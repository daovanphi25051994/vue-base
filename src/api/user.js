import httpRequest from "../request/request";
import { data } from "autoprefixer";

export function getInfoUser(id) {
  return httpRequest({
    url: `api/users/${id}/posts`,
    method: "get",
    data
  });
}

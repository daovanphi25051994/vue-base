import httpRequest from '../../request/request'
import { data } from 'autoprefixer'

export function getUsers () {
  return httpRequest({
    url: 'api/admin/users',
    method: 'get',
    data
  })
}

import httpRequest from '../request/request'

export function login(data) {
    return httpRequest({
        url: 'auth/login',
        method: 'post',
        data: data
    })
}
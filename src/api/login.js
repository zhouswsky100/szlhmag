import request from '@/utils/request'

const client_id = 'budget-web'
const client_secret = '*icfWh2HYav20$mjVCs2D3DpEp0j0j^B'
const grant_type = 'password'
const scope = 'server'

// 登录方法
export function login(username, password, code, uuid) {
  return request({
    url: '/auth/oauth/token',
    method: 'post',
    params: {username, password, code, uuid, client_id, client_secret, grant_type, scope}
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/user/getInfo',
    method: 'get'
  })
}


// 退出方法
export function logout() {
  return request({
    url: '/auth/token/logout',
    method: 'delete'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/code',
    method: 'get'
  })
}

export function getTest() {
  return request({
    url: '/budget/index/hello',
    method: 'get'
  })
}

import request from "./request";


// 用户注册
export function userReg(user) {
  return request({
    method: 'post',
    url: '/user/reg',
    data: user
  })
}

// 用户登录
export function userLogin(user) {
  return request({
    method: 'post',
    url: '/user/login',
    data: user
  })
}

// 用户验证
export function userVerify() {
  return request({
    url: '/user/verify',
  })
}

// 修改用户信息
export function updateUserInfo(form) {
  return request({
    method: 'patch',
    url: '/user/info',
    data: form
  })
}

// 修改密码
export function updatePwd(user) {
  return request({
    method: 'patch',
    url: '/user/pwd',
    data: user
  })
}



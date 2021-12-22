import request from "./request";

export function getUser() {
  return request({
    url: 'https://cnodejs.org/api/v1/topics',
    // params: {
    //   maitKey
    // }
  })
  // return request({
  //   method: 'get',
  //   path: '/user',
  //   params: ''
  // })
}

// 修改用户信息
export function updateUserInfo(form) {
  return request({
    method: 'patch',
    url: '/user/info',
    data: form
  })
}

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


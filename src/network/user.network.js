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


import request from "./request";


// 查询粉丝
export function findFans(page, author) {
  return request({
    url: '/fans',
    params: {
      page,
      author
    }
  })
}

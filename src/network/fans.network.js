import request from "./request";


// 删除文章
export function findFans(page, author) {
  return request({
    url: '/fans',
    params: {
      page,
      author
    }
  })
}

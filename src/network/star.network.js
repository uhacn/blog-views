import request from "./request";


// 查询点赞
export function findStar(page, author) {
  return request({
    url: '/star',
    params: {
      page,
      author
    }
  })
}

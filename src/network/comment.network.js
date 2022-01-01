import request from "./request";


// 查询评论
export function findByAuthor(page, author) {
  return request({
    url: '/comment/admin',
    params: {
      page,
      author
    }
  })
}

import request from "./request";


// 删除文章
export function findByAuthor(page, author) {
  return request({
    url: '/comment/admin',
    params: {
      page,
      author
    }
  })
}

import request from "./request";


// 发布文章
export function createArticle(form, content, createTime) {
  return request({
    method: "post",
    url: '/article',
    data: {
      id: Date.now(),
      title: form.title,
      createTime,
      stemFrom: form.stemFrom,
      content,
      author: form.author
    }
  })
}

// 获取所有文章
export function getAllArticle(page, author) {
  return request({
    url: '/article',
    params: {
      page,
      author
    }
  })
}

// 获取单篇文章
export function getOneArticle(id) {
  return request({
    url: `/article/${id}`,
  })
}

// 删除文章
export function removeArticle(id) {
  return request({
    method: "delete",
    url: `/article/${id}`
  })
}

// 修改文章
export function updateArticle(id, title, content, stemFrom) {
  return request({
    method: "patch",
    url: `/article/${id}`,
    data: {
      title,
      content, 
      stemFrom
    }
  })
}

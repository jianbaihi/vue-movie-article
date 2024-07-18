import request from './request'

export function getArticleListHttp() {
    return request.get('/article')
}

export function getArticleDetailHttp(id) {
    return request.get(`/article/detail?id=${id}`)
}
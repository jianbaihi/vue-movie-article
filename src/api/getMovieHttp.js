import request from './request'

export function getMovieDetailHttp(id) {
    return request.get('/films/' + id)
}
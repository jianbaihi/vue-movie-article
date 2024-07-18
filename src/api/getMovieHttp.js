import request from './request'

export function getMovieTop250Http() {
    return request.get('/films/top250')
}

export function getMovieCommingSoonHttp(id) {
    return request.get('/films/coming_soon')
}

export function getMovieInTheatersHttp(){
    return request.get('/films/in_theaters')
}

export function getMovieDetailHttp(id) {
    return request.get('/films/' + id)
}
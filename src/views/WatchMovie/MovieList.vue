<template>
  <MovieListItem :movies=top250>豆瓣Top250</MovieListItem>
  <MovieListItem :movies=coming_soon> 正在热映 </MovieListItem>
  <MovieListItem :movies=in_theaters> 即将上映 </MovieListItem>
  <BottomNavigation :show="false"/>
</template>

<script setup>
import MovieListItem from './components/MovieListItem.vue'
import BottomNavigation from '../../components/BottomNavigation.vue'
import {onMounted,ref} from 'vue'
import {getMovieDetailHttp} from '../../api/getMovieHttp'

const movieList = ref(['top250','coming_soon','in_theaters'])
const top250 = ref({})
const coming_soon = ref({})
const in_theaters = ref({})

onMounted(() => {
    Promise.all(movieList.value.map(item=>getMovieDetailHttp(item)))
    .then(res=>{
        top250.value = {
            title: 'top250',
            name: '豆瓣Top250',
            movies: res[0].result.slice(0,3)
        } 
        coming_soon.value = {
            title: 'coming_soon',
            name: '正在热映',
            movies: res[1].result.slice(0,3)
        }
        in_theaters.value = {
            title: 'in_theaters',
            name: '即将上映',
            movies: res[2].result.slice(0,3)
        }
        // console.log(top250.value)
        // console.log(coming_soon.value)
    })
})
</script>

<style scoped></style>

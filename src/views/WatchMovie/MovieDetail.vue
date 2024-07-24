<template>
    <div class="nav">
      <i class="iconfont back" @click="$router.back()"></i>
      <h3>{{ name }}</h3>
    </div>
    <div class="movie-content">
      <div class="item" v-for="movie in movies" :key="movie.id">
        <img :src=movie.pic alt="" />
        <p>{{ movie.title }}</p>
        <p>评分:{{ movie.raiting }}</p>
      </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref,onMounted } from 'vue'
import {getMovieDetailHttp} from '../../api/getMovieHttp'
const $route = useRoute()


const movies = ref([])
const name = $route.query.name
onMounted(() => {
    let id = $route.query.id
    getMovieDetailHttp(id).then(res => {
        console.log(res.result)
        movies.value = res.result
    })
})
</script>

<style scoped>
.nav {
  width: 10rem;
  position: fixed;
  height: 0.8rem;
  background-color: #405f80;
  top: 0;
  line-height: 0.8rem;
  padding-left: 0.2666666667rem;
  display: flex;
  text-align: center;
}
.back {
  font-size: 0.4rem;
  color: #fff;
  cursor: pointer;
}
.nav h3 {
  color: #fff;
  margin-left: 3.3333333333rem;
}
.movie-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.2666666667rem 0;
  padding: 0.6666666667rem;
}
.item {
  width: 2.2666666667rem;
  border: 0.0133333333rem solid #eee;
  margin: 0.2666666667rem 0;
}
.item img {
  width: 100%;
  height: 2.6666666667rem;
}
</style>

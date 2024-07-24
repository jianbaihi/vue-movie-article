<template>
  <div class="item">
    <p class="title">
      <span><slot></slot></span>
      <div @click="enterDetail()" class="more">更多&gt;</div>
    </p>
    <div class="movie-content">
      <div 
      class="item" 
      v-for="movie in movies.movies" 
      :key="movie.id"
      >
        <img :src=movie.pic  alt="" />
        <p>{{ movie.title }}</p>
        <p>评分:{{ movie.raiting }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted  } from 'vue';
import { useRouter } from 'vue-router';
const $router = useRouter();

const enterDetail = () => {
  $router.push({name:'movieDetail',query:{id:props.movies.title,name:props.movies.name}})

}


const props = defineProps({
  movies:{
    type:Object,
  }
})
</script>

<style scoped>
    .item {
    padding: 0.1333333333rem;
    }
    .item .title {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    background-color: #eee;
    align-items: center;
    padding: 0.2666666667rem;
    }
    .title div {
    text-decoration: none;
    color: #333;
    cursor: pointer;
    }
    
    .movie-content {
    display: flex;
    justify-content: space-between;
    margin: 0.2666666667rem 0;
    }
    .movie-content .item {
    width: 2.2666666667rem;
    border: 0.0133333333rem solid #eee;
    margin: 0.2666666667rem 0;
    }
    .movie-content .item img {
    width: 100%;
    height: 2.6666666667rem;
    }
</style>

<template>
  <div class="item">
    <p class="title">
      <span>豆瓣Top250</span>
      <a href="/vue-movie-article/#/movieDetail?id=top250" class="">
        <span>更多&gt;</span></a>
    </p>
    <div class="movie-content">
      <div class="item">
        <img src="https://s1.ax1x.com/2023/07/11/pCWWdSI.png" alt="" />
        <p>肖申克的赎</p>
        <p>评分:9.7</p>
      </div>
      <div class="item">
        <img src="https://s1.ax1x.com/2023/07/11/pCWWs0S.png" alt="" />
        <p>霸王别姬</p>
        <p>评分:9.6</p>
      </div>
      <div class="item">
        <img src="https://s1.ax1x.com/2023/07/11/pCWWh60.png" alt="" />
        <p>阿甘正传</p>
        <p>评分:9.5</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
    .title a {
    text-decoration: none;
    color: #333;
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

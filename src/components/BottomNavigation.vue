<template>
  <div class="nav-bottom">
    <a href="/" class="router-link-exact-active">
      <i class="iconfont"></i>
      <p>阅读</p>
    </a>
    <a href="/movieList" class="router-link-exact-active">
      <i class="iconfont"></i>
      <p>电影</p>
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
.nav-bottom {
  position: fixed;
  width: 10rem;
  height: 1.0666666667rem;
  border-top: 0.0133333333rem solid #333;
  bottom: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

a {
  text-decoration: none;
  color: #333;
  
}
p{
    margin: 0;
}
.router-link-exact-active {
    color: #38f;
    border-bottom: .0133333333rem solid #3388ff;
}
</style>

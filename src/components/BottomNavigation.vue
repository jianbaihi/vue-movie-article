<template>
  <div class="nav-bottom">
    <a href="/" :class="{active:props.show}" >
      <i class="iconfont"></i>
      <p>阅读</p>
    </a>
    <a href="/movieList" :class="{active:!props.show}">
      <i class="iconfont"></i>
      <p>电影</p>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue"
import {useRouter} from "vue-router"
const $router = useRouter()
const props = defineProps({
  show: {
    type: Boolean,
  }
})

</script>

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

.nav-bottom div {
  text-decoration: none;
  color: #333;
  
}
p{
    margin: 0;
}
.active {
    color: #38f;
    border-bottom: .0133333333rem solid #3388ff;
    cursor: pointer;
}
</style>

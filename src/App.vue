<template>
    <div id="app">
      <!-- keep-alive 可以让滚动条停留在记录值的位置 -->
    <router-view v-slot="{ Component }">
      <keep-alive exclude="ArticleDetail,movieDetail">
          <component :is="Component" />
      </keep-alive>
    </router-view>
    </div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    padding-bottom: .9333333333rem;
    width: 10rem;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 0 .2rem .04rem rgba(51, 51, 51, .373);
}

</style>
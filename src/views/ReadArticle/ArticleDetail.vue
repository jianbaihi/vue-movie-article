<template>
  <div>
    <div class="nav">
      <i class="iconfont back" @click="$router.back()"></i>
    </div>
    <div class="container">
      <img
        :src="ItemImage"
        alt=""
        class="bg"
      />
      <h4 class="title">
        <span class="iconfont"></span> 作者: <span>{{articleItem.author}}</span>
        <span>发表于: {{articleItem.dateTime}}</span>
      </h4>
      <h3>{{articleItem.title}}</h3>
      <hr />
      <p class="content">
        {{articleItem.detail}}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getArticleDetailHttp } from '../../api/getArticleHttp.js'
import { useRoute, useRouter } from 'vue-router'

const $route = useRoute()
const $router = useRouter()
const articleItem = ref({})
const ItemImage = ref('')

onMounted(async () => {
  const res = await getArticleDetailHttp($route.query.id)
  articleItem.value = res.result
  ItemImage.value = res.result.music.coverImg
//   console.log(articleItem.value)
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
  /* padding-left: 0.2666666667rem; */
  display: flex;
  text-align: center;
}
.nav i{
    padding-left: 0.2666666667rem;
}
.back {
  font-size: 0.4rem;
  color: #fff;
  cursor: pointer;
}
.container {
  margin-top: 0.2666666667rem;
  padding: 0.6666666667rem;
}
.bg {
  width: 80%;
  margin: 0 auto;
  display: block;
}
.title,
h3 {
  line-height: 0.8rem;
}
.title span {
  margin-right: 0.0666666667rem;
  color: #666;
}
.content {
  margin-top: 0.2666666667rem;
  text-indent: 0.32rem;
  letter-spacing: 0.0666666667rem;
}
</style>

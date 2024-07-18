<template>
  <div>
    <div
      class="item"
      v-for="(item, index) in articleList"
      :key="item.id"
      @click="handleClick(item.id)"
    >
      <div class="title">
        <img :src="item.music.coverImg" alt="" />
        <p>{{ item.date }}</p>
      </div>
      <h3>{{ item.title }}</h3>
      <img :src="item.music.coverImg" alt="" class="bg" />
      <p>
        {{ item.content }}
      </p>
      <div class="reading">
        <i class="iconfont"></i><i>{{ item.collection }}</i>
        <i class="iconfont"></i><i>{{ item.reading }}</i>
      </div>
    </div>
  </div>
  <BottomNavigation />
</template>

<script setup>
import { getArticleListHttp } from '../../api/getArticleHttp.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BottomNavigation from '../../components/BottomNavigation.vue'
const $router = useRouter()

const articleList = ref([])

onMounted(async () => {
  const res = await getArticleListHttp()
  // console.log(res)
  articleList.value = res
})

const handleClick = (id) => {
  $router.push(`/articleDetail?id=${id}`)
}
</script>

<style scoped>
    .item {
    padding: 0.2666666667rem;
    border-bottom: 0.0133333333rem solid #eee;
    }
    .item:hover {
    background-color: #eee;
    cursor: pointer;
    }
    .title {
    display: flex;
    align-items: center;
    }
    .title img {
    width: 0.6666666667rem;
    height: 0.6666666667rem;
    border-radius: 50%;
    margin-right: 0.1333333333rem;
    }
    .item h3 {
    line-height: 0.8rem;
    }
    .item .bg {
    width: 50%;
    box-shadow: 0 0 0.2rem 0.04rem rgba(51, 51, 51, 0.373);
    }
    .reading {
    line-height: 0.4rem;
    color: #777;
    }
    .reading i {
    margin-left: 0.0666666667rem;
    }
</style>

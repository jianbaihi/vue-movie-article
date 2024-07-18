import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 文章列表
      path: '/',
      name: 'articleList',
      component: () => import('../views/ReadArticle/ArticleList.vue'),
    },
    // 文章详情
    {
      path:'/articleDetail',
      name:'articleDetail',
      component: () => import('../views/ReadArticle/ArticleDetail.vue')
    },
    // 电影列表
    {
      path: '/movieList',
      name: 'movieList',
      component: () => import('../views/WatchMovie/MovieList.vue'),
    },
    // 电影详情
    {
      path:'/movieDetail',
      name:'movieDetail',
      component: () => import('../views/WatchMovie/MovieDetail.vue')
    }
  ],
  //  滚动行为
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
})

export default router

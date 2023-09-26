import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import BoardListView from '../components/BoardListView'
import PostingView from '../components/PostingView'
import PostListView from '../components/PostListView'
import PostDetail from '../components/PostDetail'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/boards',
    name:'boardList',
    component:BoardListView
  },
  {
    path:'/posting',
    name:'posting',
    component:PostingView
  },
  {
    path:'/posts',
    name:'postList',
    component:PostListView
  },
  {
    path:'/postDetail',
    name:'postDetail',
    component:PostDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('views/login/Login.vue')
const Home = () => import('views/home/Home.vue')
const User = () => import('views/user/User')
const Info = () => import('views/user/UserInfo.vue')
const Pwd = () => import('views/user/UserPwd.vue')
const Article = () => import('views/article/Article')
const ArticleAdd = () => import('views/article/ArticleAdd.vue')
const ArticleList = () => import('views/article/ArticleList.vue')
const Comment = () => import('views/comment/Comment')
const Fans = () => import('views/fans/Fans.vue')
const Star = () => import('views/star/Star.vue')

// 1.安装插件 
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/admin'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register
  // },
  {
    path: '/admin',
    name: 'Home',
    component: Home,
    redirect: '/admin/user',
    children: [
      {
        path: '/admin/user',
        name: 'User',
        component: User
      },
      {
        path: '/admin/user/Info',
        name: 'Person',
        component: Info,
        meta: {
          title: '个人资料'
        }
      },
      {
        path: '/admin/user/password',
        name: 'Pwd',
        component: Pwd
      },
      {
        path: '/admin/article',
        name: 'Article',
        component: Article
      },
      {
        path: '/admin/article/add',
        name: 'ArticleAdd',
        component: ArticleAdd
      },
      {
        path: '/admin/article/list',
        name: 'ArticleList',
        component: ArticleList
      },
      {
        path: '/admin/comment',
        name: 'Comment',
        component: Comment
      },
      {
        path: '/admin/fans',
        name: 'Fans',
        component: Fans
      },
      {
        path: '/admin/star',
        name: 'Star',
        component: Star
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' 
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
import reg from '@/views/Reg.vue'
import login from '@/views/Login.vue'
import tabbar from '@/views/tabbar/Tabbar.vue'
import index from '@/views/tabbar/Index.vue'
import news from '@/views/tabbar/News.vue'
import user from '@/views/tabbar/User.vue'
import teacher from '@/views/Teacher.vue'
import course from '@/views/Course.vue'
import recipe from '@/views/Recipe'
import brief from '@/views/Brief.vue'
import NewsDetail from '@/views/NewsDetail'
import UserComment from '@/views/UserComment'
import UserInfo from '@/views/UserInfo'
import UserApply from '@/views/UserApply'

Vue.use(VueRouter)

const routes = [
  {
    path: '/reg', component: reg, name: 'reg'
  }, {
    path: '/login', component: login, name: 'login'
  }, {
    path: '/',
    component: tabbar,
    children: [
      {
        path: '', component: index, name: 'index'
      }, {
        path: '/news', component: news, name: 'news', props: true
      }, {
        path: '/user', component: user, name: 'user'
      }
    ]
  }, {
    path: '/teacher',
    component: teacher,
    name: 'teacher'
  }, {
    path: '/course',
    component: course,
    name: 'course'
  }, {
    path: '/recipe',
    component: recipe,
    name: 'recipe'
  }, {
    path: '/brief',
    component: brief,
    name: 'brief'
  }, {
    path: '/news-detail',
    component: NewsDetail,
    name: 'newsDetail'
  }, {
    path: '/user-comment',
    component: UserComment,
    name: 'userComment'
  }, {
    path: '/user-info',
    component: UserInfo,
    name: 'userInfo'
  }, {
    path: '/user-apply',
    component: UserApply,
    name: 'userApply'
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import constructionAlert from '../components/constructionAlert'
import loginForm from '../components/loginForm'
import home from '../components/home'
import newMessageForm from '../components/newMessageForm'
import profilePage from '../components/profilePage'
import modifyMessage from '../components/modifyMessage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/construction',
    name: 'construction',
    component: constructionAlert
  },
  {
    path: '/',
    name: 'login',
    component: loginForm
  },
  {
    path: '/login',
    name: 'loginredir',
    component: loginForm
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/new',
    name: 'newMessage',
    component: newMessageForm
  },
  {
    path: '/user',
    name: 'profilePage',
    component: profilePage
  },
  {
    path: '/thread/:id',
    name: 'modifyMessage',
    component: modifyMessage
  },
]

const router = new VueRouter({
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import Home from '../pages/Home.vue'
import HouseMainPage from '../pages/HouseMainPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    // required param ':id'
    path: '/house-details/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  },{
    // required param ':id'
    path: '/house-main',
    name: 'HouseMainPage',
    component: HouseMainPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

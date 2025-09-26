import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calculator from '../views/Calculator.vue'
import Events from '../views/Events.vue'
import Library from '../views/Library.vue'
import Success from '../views/Success.vue'
import Booking from '../views/Booking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

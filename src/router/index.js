import { createRouter, createWebHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'notes', component: NotesView },
  { path: '/about', name: 'about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

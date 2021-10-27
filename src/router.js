import { createRouter, createWebHistory } from 'vue-router'
import QuizList from './components/QuizList.vue'
import Quiz from './components/Quiz.vue'

const routes = [
  { path: '/', component: QuizList },
  { path: '/quiz/:slug', component: Quiz },
  {
    path: '/quiz/:slug/:step',
    component: Quiz,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

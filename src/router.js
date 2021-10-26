// 1. Define route components.
// These can be imported from other files
import { createRouter, createWebHistory } from 'vue-router'
import QuizList from './components/QuizList.vue'
import Quiz from './components/Quiz.vue'
import QuizQuestion from './components/QuizQuestion.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: QuizList },
  { path: '/quiz/:slug', component: Quiz },
  {
    path: '/quiz/:slug/:step',
    component: Quiz,
    children: [
      // QuizQuestion will be rendered inside Quiz's <router-view>
      // when /quiz/:slug/:step is matched
      { path: '', component: QuizQuestion },

      // ...other sub routes
    ],
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router

<template>
  <div>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">
        <router-link :to="'/quiz/' + quiz.slug.current" class="underline">{{
          quiz.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from '../sanity'
export default {
  name: 'QuizList',
  data() {
    return {
      quizzes: [],
    }
  },
  created() {
    sanity
      .fetch('*[_type == "quiz"]')
      .then((quizzes) => (this.quizzes = quizzes))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
}
</script>

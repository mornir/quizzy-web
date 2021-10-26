<template>
  <div class="p-8">
    <h1 class="mb-4 text-5xl">{{ quiz.title }}</h1>
    <p>
      {{ quiz.description }}
    </p>
    <router-view :questions="quiz.questions"></router-view>
    <router-link to="2" class="cursor-pointer">Weiter</router-link>
  </div>
</template>

<script>
import sanity from '../sanity'
export default {
  name: 'Quiz',
  data() {
    return {
      quiz: {},
      step: 1,
    }
  },
  created() {
    sanity
      .fetch('*[_type == "quiz"  && slug.current == $slug][0]', {
        slug: this.$route.params.slug,
      })
      .then((quiz) => (this.quiz = quiz))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
}
</script>

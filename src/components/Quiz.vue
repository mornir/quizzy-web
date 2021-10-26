<template>
  <div>
    <h1 class="mb-12 text-2xl font-bold uppercase md:text-5xl">
      {{ quiz.title }}
    </h1>
    <p class="mb-10 font-light whitespace-pre-line">
      {{ quiz.description }}
    </p>

    <router-view :questions="quiz.questions"></router-view>
    <div class="flex justify-center lg:justify-start">
      <button
        @click="next"
        type="button"
        class="px-8 py-2 text-lg font-bold text-white uppercase rounded-full bg-primary"
      >
        Weiter
      </button>
    </div>
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
  methods: {
    next() {
      this.step++
      this.$router.push({ params: { step: this.step } })
    },
  },
}
</script>

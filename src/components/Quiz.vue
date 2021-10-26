<template>
  <div>
    <h1 class="mb-12 text-2xl font-bold uppercase md:text-5xl">
      {{ quiz.title }}
    </h1>
    <p class="mb-10 font-light whitespace-pre-line">
      {{ quiz.description }}
    </p>

    <router-view
      :questions="quiz.questions"
      @selected="checkAnswer"
    ></router-view>
    <p class="mb-8 font-light text-primary" v-if="showWrongAnswerHint">
      Sorry, falsche Antwort. Versuchen Sie’s noch einmal.
    </p>
    <div class="flex justify-center lg:justify-start">
      <button
        @click="next"
        type="button"
        :disabled="isDisabled"
        class="px-8 py-2 text-lg font-bold text-white uppercase rounded-full bg-primary disabled:opacity-25"
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
      isDisabled: true,
      isAnswerCorrect: false,
      showWrongAnswerHint: false,
    }
  },
  created() {
    if (this.$route.params.step) {
      this.step = this.$route.params.step
    }
    sanity
      .fetch('*[_type == "quiz"  && slug.current == $slug][0]', {
        slug: this.$route.params.slug,
      })
      .then((quiz) => (this.quiz = quiz))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
  methods: {
    checkAnswer(answer) {
      this.showWrongAnswerHint = false
      this.isDisabled = false
      this.isAnswerCorrect = answer
    },
    next() {
      if (this.isAnswerCorrect) {
        if (this.step >= this.quiz.questions.length) {
          console.log('end of quiz!')
          //this.$router.push({ params: { step: this.step } })
        } else {
          this.step++
          this.$router.push({ params: { step: this.step } })
        }
      } else {
        this.showWrongAnswerHint = true
      }
    },
  },
}
</script>

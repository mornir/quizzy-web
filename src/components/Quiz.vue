<template>
  <div>
    <h1 class="mb-12 text-2xl font-bold uppercase md:text-5xl">
      {{ quiz.title }}
    </h1>

    <QuizForm v-if="showForm" />

    <div v-else>
      <p class="mb-10 font-light whitespace-pre-line">
        {{ quiz.description }}
      </p>

      <form @submit.prevent="checkAnswer">
        <RadioGroup v-model="answer" class="mb-8">
          <RadioGroupLabel>
            <div class="mb-6 font-bold">
              <span class="uppercase text-primary"
                >Frage {{ step }}: <br />
              </span>
              <span class="text-secondary">{{ question.title }}</span>
            </div>
          </RadioGroupLabel>
          <RadioGroupOption
            v-slot="{ checked }"
            :value="choice._key"
            v-for="choice in question?.choices"
            :key="choice._key"
          >
            <div class="flex items-center mb-3 cursor-pointer gap-x-4 group">
              <div
                class="flex-shrink-0 w-3 h-3 transition-all duration-500 ease-in rounded-full ring-2 ring-yellow-500 ring-offset-2 group-hover:ring-red-500"
                :class="{ 'bg-red-500': checked }"
              ></div>
              <span class="font-light">{{ choice.title }}</span>
            </div>
          </RadioGroupOption>
        </RadioGroup>

        <p class="mb-8 font-light text-primary" v-if="showWrongAnswerHint">
          Sorry, falsche Antwort. Versuchen Sie’s noch einmal.
        </p>
        <div class="flex justify-center lg:justify-start">
          <button
            @click="next"
            :disabled="!answer"
            class="px-8 py-2 text-lg font-bold text-white uppercase rounded-full bg-primary disabled:opacity-25"
          >
            Weiter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import QuizForm from './QuizForm.vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import sanity from '../sanity'
export default {
  name: 'Quiz',
  components: {
    QuizForm,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  data() {
    return {
      quiz: {},
      step: 1,
      showWrongAnswerHint: false,
      showForm: false,
      answer: '',
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
  computed: {
    question() {
      const question = this.quiz?.questions?.[this.step - 1]
      if (question) {
        return question
      } else {
        return {}
      }
    },
  },
  watch: {
    answer() {
      this.showWrongAnswerHint = false
    },
  },
  methods: {
    checkAnswer() {
      const isAnswerCorrect = this.question.choices.find(
        (choice) => choice._key === this.answer
      ).isCorrect

      if (isAnswerCorrect) {
        if (this.step >= this.quiz.questions.length) {
          this.showForm = true
        } else {
          this.step++
          this.answer = ''
          this.$router.push({ params: { step: this.step } })
        }
      } else {
        this.showWrongAnswerHint = true
      }
    },
  },
}
</script>

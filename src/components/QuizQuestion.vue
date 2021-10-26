<template>
  <form class="mb-8">
    <RadioGroup v-model="answer" :value="answer">
      <RadioGroupLabel>
        <div class="mb-6 font-bold">
          <span class="uppercase text-primary"
            >Frage {{ this.$route.params.step }}: <br />
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
        <div class="flex items-center mb-3 gap-x-4 group">
          <div
            class="flex-shrink-0 w-3 h-3 transition-all duration-500 ease-in rounded-full ring-2 ring-yellow-500 ring-offset-2 group-hover:ring-red-500"
            :class="{ 'bg-red-500': checked }"
          ></div>
          <span class="font-light">{{ choice.title }}</span>
        </div>
      </RadioGroupOption>
    </RadioGroup>
  </form>
</template>

<script>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

export default {
  name: 'QuizQuestion',
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
  },
  components: { RadioGroup, RadioGroupLabel, RadioGroupOption },
  data() {
    return {
      answer: '',
    }
  },
  computed: {
    question() {
      const question = this.questions[this.$route.params.step - 1]
      if (question) {
        return question
      } else {
        return {}
      }
    },
  },
  watch: {
    answer(id) {
      const selectedAnswer = this.question.choices.find(
        (choice) => choice._key === id
      )
      this.$emit('selected', selectedAnswer.isCorrect)
    },
  },
}
</script>

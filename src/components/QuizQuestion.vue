<template>
  <form>
    <RadioGroup v-model="plan" class="cursor-pointer">
      <RadioGroupLabel>{{ question.title }}</RadioGroupLabel>
      <RadioGroupOption
        v-slot="{ checked }"
        :value="choice._key"
        v-for="choice in question.choices"
        :key="choice._key"
      >
        <div class="flex items-center gap-x-4 group">
          <div
            class="w-3 h-3 transition-all duration-500 ease-in rounded-full ring-2 ring-yellow-500 ring-offset-2 group-hover:ring-red-500"
            :class="{ 'bg-red-500': checked }"
          ></div>
          <span>{{ choice.title }}</span>
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
      plan: 'startup',
    }
  },
  computed: {
    question() {
      return this.questions[this.$route.params.step - 1]
    },
  },
}
</script>

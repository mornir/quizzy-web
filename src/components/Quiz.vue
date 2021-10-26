<template>
  <div class="p-8">
    <form>
      <h1 class="mb-4 text-5xl">Wettbewerb Herbst 2021</h1>
      <p>
        {{ quiz.description }}
      </p>
      <RadioGroup v-model="plan" class="cursor-pointer">
        <RadioGroupLabel
          >Auf welche Unterlage soll ich Kerzen stellen?</RadioGroupLabel
        >
        <RadioGroupOption v-slot="{ checked }" value="startup">
          <div class="flex items-center gap-x-4 group">
            <div
              class="w-3 h-3 transition-all duration-500 ease-in rounded-full ring-2 ring-yellow-500 ring-offset-2 group-hover:ring-red-500"
              :class="{ 'bg-red-500': checked }"
            ></div>
            <span>Startup</span>
          </div>
        </RadioGroupOption>
        <RadioGroupOption v-slot="{ checked }" value="business">
          <div class="flex items-center gap-x-4 group">
            <div
              class="w-3 h-3 transition-all duration-500 ease-in rounded-full ring-2 ring-yellow-500 ring-offset-2 group-hover:ring-red-500"
              :class="{ 'bg-red-500': checked }"
            ></div>
            <span>Business</span>
          </div>
        </RadioGroupOption>
        <RadioGroupOption v-slot="{ checked }" value="enterprise">
          <div class="flex items-center gap-x-4 group">
            <div
              class="w-3 h-3 transition-all duration-500 ease-in rounded-full ring-2 ring-yellow-500 ring-offset-2 group-hover:ring-red-500"
              :class="{ 'bg-red-500': checked }"
            ></div>
            <span>Enterprise</span>
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </form>
  </div>
</template>

<script>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import sanity from '../sanity'
export default {
  name: 'App',
  components: { RadioGroup, RadioGroupLabel, RadioGroupOption },
  data() {
    return {
      plan: 'startup',
      quiz: {},
    }
  },
  created() {
    sanity
      .fetch('*[_type == "quiz"  && title == "Wettbewerb Herbst 2021"][0]')
      .then((quiz) => (this.quiz = quiz))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
}
</script>

<template>
  <main class="p-8">
    <form>
      <h1 class="text-5xl mb-4">Quiz</h1>
      <RadioGroup v-model="plan" class="cursor-pointer group">
        <RadioGroupLabel
          >Auf welche Unterlage soll ich Kerzen stellen?</RadioGroupLabel
        >
        <RadioGroupOption v-slot="{ checked }" value="startup">
          <div class="flex items-center gap-x-4">
            <div
              class="
                h-3
                w-3
                rounded-full
                ring-2 ring-yellow-500 ring-offset-2
                group-hover:ring-red-500
                transition-colors
                duration-500
                ease-in-out
              "
              :class="{ 'bg-red-500': checked }"
            ></div>
            <span>Startup</span>
          </div>
        </RadioGroupOption>
        <RadioGroupOption v-slot="{ checked }" value="business">
          <span>Business</span>
        </RadioGroupOption>
        <RadioGroupOption v-slot="{ checked }" value="enterprise">
          <span>Enterprise</span>
        </RadioGroupOption>
      </RadioGroup>
    </form>
  </main>
</template>

<script>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue"

export default {
  name: "App",
  components: { RadioGroup, RadioGroupLabel, RadioGroupOption },
  data() {
    return {
      plan: "startup",
    }
  },
}
</script>

<template>
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
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
}
</script>

<template>
  <form @submit.prevent="handleForm">
    <input type="email" v-model="email" required />
    <button>Absenden</button>
  </form>
</template>

<script>
export default {
  name: 'QuizForm',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    handleForm() {
      console.log(this.email)
    },
  },
}
</script>

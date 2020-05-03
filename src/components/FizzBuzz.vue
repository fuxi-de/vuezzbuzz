<template>
  <div class="fizzbuzz flex flex-col justify-center mx-auto w-9/12 h-screen">
    <form class="w-full max-w-sm self-center" @submit.prevent>
      <div
        class="flex items-center border-b border-b-2 py-2"
        :class="error.length ? 'border-red-500' : 'border-immowelt-yellow'"
      >
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="number"
          placeholder="Gib eine Zahl ein"
          v-model="input"
          data-test="input"
          @keyup.enter="validate"
        />
        <button
          class="flex-shrink-0 bg-immowelt-500 hover:bg-immowelt-400 border-immowelt-500 hover:border-immowelt-400 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          data-test="submit"
          @click="validate"
        >
          Fizz the Buzz
        </button>
        <button
          class="flex-shrink-0 border-transparent border-4 text-immowelt-500 hover:text-gray-800 text-sm py-1 px-2 rounded"
          type="button"
          @click="reset($event)"
        >
          Cancel
        </button>
      </div>
      <p v-if="error.length" class="text-red-500 text-xs italic mt-4 text-left" data-test="error">
        Bitte wähle eine positive Zahl
      </p>
    </form>
    <success-message v-if="output.length" :message="output" />
  </div>
</template>

<script>
import SuccessMessage from './SuccessMessage'
import axios from 'axios'

export default {
  name: 'FizzBuzz',
  components: {
    SuccessMessage
  },
  data () {
    return {
      input: '',
      output: '',
      error: '',
      errors: [],
      test: true
    }
  },
  methods: {
    validate () {
      this.error = ''
      this.output = ''
      if (this.input <= 0) {
        this.error = 'Deine Eingabe muss eine Zahl sein die größer als 0 ist!'
        return
      }
      this.fizzBuzz()
    },
    async fizzBuzz () {
      try {
        const response = await axios.get('https://vuezzbuzz-mt722836z.now.sh/api/fizzBuzz', {
          params: {
            input: this.input
          }
        })
        this.output = response.data.output
      } catch (e) {
        this.errors.push(e)
      }
    },
    reset () {
      this.input = 0
      this.error = ''
    }
  }
}
</script>

<style scoped lang="scss"></style>

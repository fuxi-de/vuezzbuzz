<template>
  <div class="fizzbuzz flex flex-col justify-center mx-auto w-9/12 h-screen">
    <form class="w-full max-w-sm self-center" @submit.prevent>
      <div
        class="flex flex-wrap md:flex-no-wrap items-center justify-center border-none md:border-solid md:border-b md:border-b-2 py-2"
        :class="borderColor"
      >
        <input
          class="appearance-none bg-transparent border-b border-b-2 md:border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mb-2 md:mb-0"
          :class="borderColor"
          type="number"
          placeholder="Gib eine Zahl ein"
          v-model.number="input"
          data-test="input"
          @keyup.enter="validate"
          @keyup.delete="reset"
        />
        <Button
          look="full"
          label="Fizz the Buzz"
          data-test="submit"
          @propagateButtonClick="validate"
        />
        <Button
          look="inverted"
          label="cancel"
          @propagateButtonClick="reset"
        />
      </div>
      <p
        v-if="error.length"
        class="text-red-500 text-xs italic mt-4 text-center"
        data-test="error"
      >
        {{ error }}
      </p>
    </form>
    <success-message v-if="output.length" :message="output" />
  </div>
</template>

<script>
import SuccessMessage from './SuccessMessage'
import Button from './Button'
export default {
  name: 'FizzBuzz',
  components: {
    SuccessMessage,
    Button
  },
  data () {
    return {
      input: '',
      output: '',
      error: ''
    }
  },
  computed: {
    borderColor () {
      return this.error.length ? 'border-red-500' : 'border-immowelt-500'
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
    fizzBuzz () {
      const i = this.input
      this.output =
        i % 3 === 0 && i % 5 === 0
          ? 'fizzbuzz'
          : i % 5 === 0
            ? 'buzz'
            : i % 3 === 0
              ? 'fizz'
              : i.toString()
    },
    reset () {
      this.input = ''
      this.error = ''
      this.output = ''
    }
  }
}
</script>

<style scoped lang="scss"></style>

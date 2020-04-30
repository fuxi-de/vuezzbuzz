<template>
  <div class="fizzbuzz flex flex-col w-9/12 m-auto">
    <span class="output">{{ output }}</span>
    <p class="mb-16">Gib eine Zahl ein und versuch dein Glück :)</p>
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full max-w-sm m-auto"
      role="alert"
      v-if="error.length"
    >
      <strong class="font-bold">Holy smokes!</strong>
      <span class="block sm:inline"> You fucked up big time</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
    <form class="w-full max-w-sm m-auto">
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="number"
          placeholder="Gib eine Zahl ein"
          v-model="input"
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          v-on:click="validate"
        >
          Fizz the Buzz
        </button>
        <button
          class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FizzBuzz',
  data () {
    return {
      input: 0,
      output: '',
      error: ''
    }
  },
  methods: {
    validate () {
      this.error = ''
      if (this.input <= 0) {
        this.error = 'Deine Eingabe muss eine Zahl sein die größer als 0 ist!'
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
              : i
    }
  }
}
</script>

<style scoped lang="scss"></style>

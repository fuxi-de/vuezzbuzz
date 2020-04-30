<template>
  <div class="fizzbuzz flex">
    <p>Gib eine Zahl ein und versuch dein Glück :)</p>
    <h1 v-if="error.length">{{error}}</h1>
    <input class="input" v-model="input" type="number" />
    <button v-on:click="validate">submit</button>
    <span class="output">{{ output }}</span>
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

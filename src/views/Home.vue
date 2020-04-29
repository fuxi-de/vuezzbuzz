<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <fizz-buzz></fizz-buzz>
  </div>
</template>

<script>

import FizzBuzz from '@/components/FizzBuzz.vue'

export default {
  name: 'Home',
  components: {
    FizzBuzz
  }
}
</script>

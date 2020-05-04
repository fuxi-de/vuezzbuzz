<template>
  <button
    :class="classString"
    type="button"
    :data-test="dataTest"
    @click="handleButtonClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    look: String,
    label: String,
    dataTest: String
  },
  methods: {
    handleButtonClick () {
      this.$emit('propagateButtonClick')
    }
  },
  computed: {
    classString () {
      switch (this.look) {
        case 'full':
          return 'flex-shrink-0 bg-immowelt-500 hover:bg-immowelt-400 border-immowelt-500 hover:border-immowelt-400 text-sm border-4 text-white py-1 px-2 rounded'
        case 'inverted':
          return 'flex-shrink-0 border-transparent border-4 text-immowelt-500 hover:text-gray-800 text-sm py-1 px-2 rounded'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

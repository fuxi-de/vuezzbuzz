<template>
  <div
    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-16 w-full max-w-sm mx-auto"
    role="alert"
  >
    <div class="flex">
      <div>
        <p class="font-bold">The answer for that number is:</p>
        <p class="text-sm" data-test="success">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SucessMessage',
  props: {
    message: String
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <input
    v-bind="$attrs"
    @input="onInput"
  >
</template>

<script>
export default {
  name: 'NumberInput',

  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    onInput(e) {
      this.$emit('input', Number(e.target.value));
    },
  },
};
</script>

<style lang="scss">

</style>

<template>
  <input
    :value="value"
    class="input"
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
  .input {
    height: 34px;
    width: 100%;
    appearance: none;
    display: flex;
    padding: 4px;
    background: none;
    border: 1px solid rgba(60, 60, 60, 0.26);
    border-radius: 4px;
    white-space: normal;
  }
</style>

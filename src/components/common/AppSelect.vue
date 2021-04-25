<template>
  <VSelect
    :value="value"
    :options="options"
    :clearable="false"
    @input="onInput"
  />
</template>

<script>
import VSelect from 'vue-select';

export default {
  name: 'Select',

  components: {
    VSelect,
  },

  props: {
    value: {
      type: String,
      default: '',
    },

    options: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
  @import "vue-select/src/scss/vue-select.scss";
</style>

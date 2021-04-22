<template>
  <select @change="onChange">
    <option
      :value="option.value"
      :key="option.value"
      v-for="option in options"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Selct',

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
    onChange(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

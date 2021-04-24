<template>
  <component
    :is="tag"
    class="heading"
    :class="{
      'heading--center': center
    }"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'Heading',

  props: {
    tag: {
      type: String,
      required: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .heading {
    color: #fff;

    &--center {
      text-align: center;
    }
  }
</style>

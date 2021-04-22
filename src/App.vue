<template>
  <TheCalculator/>
</template>

<script>
import TheCalculator from '@/components/TheCalculator.vue';

export default {
  name: 'App',

  components: {
    TheCalculator,
  },
};
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
</style>

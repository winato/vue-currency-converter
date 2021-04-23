<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

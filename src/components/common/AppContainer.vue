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
    padding: 0 .5rem;
    align-items: center;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    position: relative;

    @media screen and (min-width: 576px) {
      padding: 0 1rem;
    }
  }
</style>

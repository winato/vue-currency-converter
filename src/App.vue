<template>
  <Container>
    <TheCalculator/>
    <CurrenciesList/>
  </Container>
</template>

<script>
import TheCalculator from '@/components/TheCalculator.vue';
import CurrenciesList from '@/components/features/CurrenciesList.vue';
import Container from '@/components/common/Container.vue';

export default {
  name: 'App',

  components: {
    TheCalculator,
    CurrenciesList,
    Container,
  },
};
</script>

<style lang="scss">
@import './scss/global.scss';
</style>

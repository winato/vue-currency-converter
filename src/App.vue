<template>
  <AppContainer>
    <TheCalculator/>
    <TheCurrenciesList/>
  </AppContainer>
</template>

<script>
import TheCalculator from '@/components/features/TheCalculator/TheCalculator.vue';
import TheCurrenciesList from '@/components/features/TheCurrenciesList/TheCurrenciesList.vue';
import AppContainer from '@/components/common/AppContainer.vue';

export default {
  name: 'App',

  components: {
    TheCalculator,
    TheCurrenciesList,
    AppContainer,
  },
};
</script>

<style lang="scss">
  @import './scss/global.scss';
</style>

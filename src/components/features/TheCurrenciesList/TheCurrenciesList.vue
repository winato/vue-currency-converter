<template>
  <div class="currencies-list">
    <CurrenciesListItem
      v-for="(rate, currency) in rates"
      :key="currency"
      :currency="currency"
      :rate="rate"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CurrenciesListItem from '@/components/features/TheCurrenciesList/CurrenciesListItem.vue';

export default {
  name: 'TheCurrenciesList',

  components: {
    CurrenciesListItem,
  },

  computed: {
    ...mapState('main', ['rates', 'from_amount', 'from_currency']),
  },
};
</script>

<style lang="scss">
.currencies-list {
  display: flex;
  padding: .3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 576px) {
    padding: 3rem;
  }
}
</style>

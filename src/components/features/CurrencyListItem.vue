<template>
  <div class="currency-list-item">
    {{ currency }}: {{ toAmount | formatNumber }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import filtersMixin from '@/mixins/filters';

export default {
  name: 'CurrencyListItem',

  props: {
    currency: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      requried: true,
    },
  },

  mixins: [filtersMixin],

  computed: {
    ...mapState('main', ['from_amount']),

    toAmount() {
      return this.from_amount * this.rate;
    },
  },
};
</script>

<style lang="scss">
.currency-list-item {
  width: 100%;
  color: #fff;
  padding: .5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, .2);

  @media screen and (min-width: 576px) {
    width: 50%;
  }
}
</style>

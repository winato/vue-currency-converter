<template>
  <div class="converter">
    <AppHeading
      tag="h1"
      :center="true"
    >
      Convert
    </AppHeading>
    <div class="converter__container">
      <CalculatorRow
        :amount.sync="from_amount"
        :currency.sync="from_currency"
        :options="currecyOptions"
        @amount-change="(amount) => onChangeAmount(amount, true)"
      />
      <div class="converter__equal">
      =
      </div>
      <CalculatorRow
        :amount.sync="to_amount"
        :currency.sync="to_currency"
        :options="currecyOptions"
        @amount-change="(amount) => onChangeAmount(amount)"
      />
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters,
  mapState,
  mapMutations,
} from 'vuex';
import CalculatorRow from '@/components/features/TheCalculator/CalculatorRow.vue';
import filtersMixin from '@/mixins/filters';
import AppHeading from '@/components/common/AppHeading.vue';

export default {
  name: 'TheCalculator',

  components: {
    CalculatorRow,
    AppHeading,
  },

  mixins: [filtersMixin],

  data: () => ({
    from_amount: 0,
    to_amount: 0,
    from_currency: 'EUR',
    to_currency: 'USD',
  }),

  computed: {
    ...mapGetters('main', ['currecyOptions']),
    ...mapState('main', ['rates']),

    currentRate() {
      return this.rates[this.to_currency];
    },
  },

  watch: {
    from_currency: {
      immediate: true,
      handler(from) {
        this.getRates(from)
          .then(() => {
            this.calcTo();
          });
      },
    },

    to_currency: {
      handler() {
        this.calcTo();
      },
    },
  },

  methods: {
    ...mapActions('main', ['getRates']),
    ...mapMutations('main', ['setFromAmount']),

    onChangeAmount(amount, isFrom = false) {
      if (isFrom) {
        this.setFromAmount(amount);
        this.calcTo();
      } else {
        this.calcFrom();
      }
    },

    calcTo() {
      const calc = this.from_amount * this.currentRate;
      this.to_amount = this.$options.filters.formatNumber(calc);
    },

    calcFrom() {
      const calc = this.to_amount / this.currentRate;
      this.from_amount = this.$options.filters.formatNumber(calc);
    },
  },
};
</script>

<style lang="scss">
  .converter {
    @media screen and (min-width: 576px) {
      padding-top: 4rem;
    }

    &__container {
      position: relative;
      z-index: 3;
      padding: .3rem;
      border-radius: .5rem;
      background-color: rgb(255, 255, 255);
      box-shadow: rgb(35, 55, 80 / 30%) 0 .25rem .875rem;
      text-align: center;

      @media screen and (min-width: 576px) {
        padding: 3rem;
      }

      &__equal {
        text-align: center;
        font-size: 2rem;
      }
    }
  }

</style>

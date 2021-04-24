<template>
  <div>
    <Heading
      tag="h1"
      :center="true"
    >
      Convert
    </Heading>
    <div class="converter">
      <Row
        :amount.sync="from_amount"
        :currency.sync="from_currency"
        :options="currecyOptions"
        @amount-change="(amount) => onChangeAmount(amount, true)"
      />
      <div class="converter__equal">
      =
      </div>
      <Row
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
import Row from '@/components/Row.vue';
import filtersMixin from '@/mixins/filters';
import Heading from '@/components/common/Heading.vue';

export default {
  name: 'TheCalculator',

  components: {
    Row,
    Heading,
  },

  data: () => ({
    from_amount: 0,
    to_amount: 0,
    from_currency: 'EUR',
    to_currency: 'USD',
  }),

  mixins: [filtersMixin],

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

  computed: {
    ...mapGetters('main', ['currecyOptions']),
    ...mapState('main', ['rates']),

    currentRate() {
      return this.rates[this.to_currency];
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
    position: relative;
    z-index: 3;
    padding: .3rem;
    border-radius: .5rem;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(35, 55, 80 / 30%) 0 .25rem .875rem;

    @media screen and (min-width: 576px) {
      padding: 3rem;
    }

    &__equal {
      text-align: center;
      font-size: 2rem;
    }
  }
</style>

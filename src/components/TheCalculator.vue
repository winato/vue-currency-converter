<template>
  <Container>
    <h1 class="converter-title">
      Convert
    </h1>
    <Row
      :amount.sync="from_amount"
      :currency.sync="from_currency"
      :options="currecyOptions"
    />
    =
    <Row
      :amount.sync="to_amount"
      :currency.sync="to_currency"
      :options="currecyOptions"
    />
  </Container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import Row from '@/components/Row.vue';
import Container from '@/components/common/Container.vue';

export default {
  name: 'TheCalculator',

  components: {
    Row,
    Container,
  },

  data: () => ({
    from_amount: 0,
    to_amount: 0,
    from_currency: 'EUR',
    to_currency: 'USD',
  }),

  filters: {
    formatNumber(number) {
      return Number(number.toFixed(5));
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

    from_amount: {
      handler() {
        this.calcTo();
      },
    },

    to_amount: {
      handler() {
        this.calcFrom();
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
  .converter-title {
    text-align: center;
  }
</style>

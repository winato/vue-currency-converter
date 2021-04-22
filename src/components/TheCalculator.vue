<template>
  <div>
    <Row
      :amount.sync="from_amount"
      :currency.sync="from_currency"
      :options="options"
    />
    <Row
      :amount.sync="to_amount"
      :currency.sync="to_currency"
      :options="options"
    />
    <pre>
      {{ $data }}
    </pre>
  </div>
</template>

<script>
import Row from '@/components/Row.vue';

export default {
  name: 'TheCalculator',

  components: {
    Row,
  },

  data: () => ({
    from_amount: 0,
    to_amount: 0,
    from_currency: '',
    to_currency: '',
    options: [
      {
        label: 'USD',
        value: 'USD',
      },
      {
        label: 'EUR',
        value: 'EUR',
      },
    ],
  }),
};
</script>

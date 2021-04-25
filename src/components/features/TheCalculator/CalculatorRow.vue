<template>
  <div class="converter-row">
    <AppNumberInput
      v-model.number="amountModel"
      class="converter-row__input"
      type="number"
      @input="onInputAmount"
    />
    <AppSelect
      :value="currency"
      :options="options"
      class="converter-row__select"
      @input="onChangeCurrency"
    />
  </div>
</template>

<script>
import AppNumberInput from '@/components/common/AppNumberInput.vue';
import AppSelect from '@/components/common/AppSelect.vue';

export default {
  name: 'CalculatorRow',

  components: {
    AppNumberInput,
    AppSelect,
  },

  props: {
    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      required: true,
    },

    options: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      amountModel: 0,
    };
  },

  watch: {
    amount(value) {
      this.amountModel = value;
    },
  },

  methods: {
    onInputAmount(amount) {
      this.$emit('update:amount', amount);
      this.$emit('amount-change', amount);
    },
    onChangeCurrency(currency) {
      this.$emit('update:currency', currency.value);
    },
  },
};
</script>

<style lang="scss">
  .converter-row {
    align-items: center;
    justify-content: center;
    display: flex;

    &__input {
      max-width: 15.625rem;
      margin: 0.25rem;
    }

    &__select {
      width: 9.375rem;
      margin: 0.25rem;
    }
  }
</style>

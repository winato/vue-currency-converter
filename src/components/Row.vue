<template>
  <div class="converter-row">
    <NumberInput
      class="converter-row__input"
      v-model.number="amountModel"
      type="number"
      @input="onInputAmount"
    />
    <Select
      class="converter-row__select"
      @input="onChangeCurrency"
      :value="currency"
      :options="options"
    />
  </div>
</template>

<script>
import NumberInput from '@/components/common/NumberInput.vue';
import Select from '@/components/common/Select.vue';

export default {
  name: 'Row',

  components: {
    NumberInput,
    Select,
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

  methods: {
    onInputAmount(amount) {
      this.$emit('update:amount', amount);
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

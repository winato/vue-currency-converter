<template>
  <div>
    <NumberInput
      v-model.number="amountModel"
      type="number"
      @input="onInputAmount"
    />
    <Select
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
      amountModel: this.amount,
    };
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
      this.$emit('update:currency', currency);
    },
  },
};
</script>

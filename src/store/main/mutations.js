export default {
  setRates: (state, payload) => {
    state.rates = payload.rates;
  },
  setFromCurrency: (state, payload) => {
    state.from_currency = payload.base;
  },
  setFromAmount: (state, payload) => {
    state.from_amount = payload;
  },
};

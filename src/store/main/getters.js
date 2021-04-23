export default {
  currecyOptions: (state) => Object.entries(state.rates).map(([currencyCode, rate]) => ({
    label: currencyCode,
    value: currencyCode,
    rate,
  })),
};

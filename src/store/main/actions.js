import getRatesService from '@/api';

const actions = {
  getRates({ commit }, from) {
    return getRatesService(from)
      .then(({ data }) => {
        commit('setRates', data);
        commit('setFromCurrency', data);
      });
  },
};

export default actions;

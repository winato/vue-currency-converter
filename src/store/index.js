import Vue from 'vue';
import Vuex from 'vuex';
import main from './main';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    main,
  },
  strict: debug,
});

export default store;

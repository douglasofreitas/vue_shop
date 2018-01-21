import Vue from 'vue';
import Vuex from 'vuex';
import { productGetters, manufacturerGetters } from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: [],
  },
  // GETTERS
  getters: Object.assign({}, productGetters, manufacturerGetters),
});

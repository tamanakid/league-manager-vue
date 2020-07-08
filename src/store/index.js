import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import custom from '@/store/modules/custom';

import loginPlugin from '@/store/plugins/loginPlugin';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    auth,
    custom
  },

  plugins: [
    loginPlugin,
  ]
});

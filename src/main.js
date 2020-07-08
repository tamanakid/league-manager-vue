import Vue from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';
import '@/styles/app/main.scss';
import vuetify from '@/plugins/vuetify';


Vue.config.productionTip = false;

new Vue({
	router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

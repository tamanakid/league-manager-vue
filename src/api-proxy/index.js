import Vue from 'vue';
import axios from 'axios';

import controllers from './controllers';
import factory from './factory'



/* Axios Instance Definition */

const courier = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

const apiProxy = new factory(courier);


/* Proxy's Controllers Instantiation */

controllers.forEach((controller) => {
  apiProxy.buildController(controller);
});



Vue.prototype.$apiProxy = apiProxy;
export default apiProxy;

import Vue from 'vue';
import axios from 'axios';

import controllers from './controllers';
import store from '@/store';



/* Axios Instance Definition */

const courier = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});



/* Axios Instance Interceptors */



/* Request Handler (May be substituted by interceptors) */

const API_INVALID_TOKEN = "AUTH_INVALID_TOKEN";
const API_INVALID_REFRESH_TOKEN = "AUTH_INVALID_REFRESH_TOKEN";


function getErrorCode(error) {
  return (error && error.response && error.response.data && error.response.data.errorCode);
}


function executeRequest ({ method, url, data }) {
  return courier({ method, url, data })
    .then((response) => {
      console.log("response:", response);
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      if (getErrorCode(error) === API_INVALID_TOKEN) {
        return refreshToken(courier);
      }
      return Promise.reject(error);
    });
}

function refreshToken () {
  return courier.post('/auth/refresh-token')
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      if (getErrorCode(error) === API_INVALID_REFRESH_TOKEN) {
        store.dispatch('auth/handleInvalidRefresh');
      }
      return Promise.reject(error);
    })
}


/** API Proxy Instance:
 * - Contains the controllers nesting the endpoints
 * - Has closure over the axios instance and the request handler
 * - May have closure over other instances (On-flight requests list)
 */

const apiProxy = {
  refreshToken,

  buildController: function ({ name, endpoints, basePath }) {
    let controller = {};

    Object.keys(endpoints).forEach((endpoint) => {
      const url = basePath + endpoints[endpoint].url;
      const method = endpoints[endpoint].method;

      controller[endpoint] = ({ data } = {}) => {
        return executeRequest({ method, url, data });
      }
    });

    this[name] = controller;
  }
}


/* Proxy's Controllers Instantiation */

controllers.forEach((controller) => {
  apiProxy.buildController(controller);
});



Vue.prototype.$apiProxy = apiProxy;
export default apiProxy;

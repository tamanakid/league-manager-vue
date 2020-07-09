import Vue from 'vue';
import axios from 'axios';

import controllers from './controllers'



/* Axios Instance Definition */

const courier = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});



/* Axios Instance Interceptors */



/* Request Handler (May be substituted by interceptors) */

async function performRequest ({ method, url, data }) {
	try {
    const response = await courier({ method, url, data });
    console.log("response:", response);
    return Promise.resolve(response);
  }
  catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};


/** API Proxy Instance:
 * - Contains the controllers nesting the endpoints
 * - Has closure over the axios instance and the request handler
 * - May have closure over other instances (A pending requests list)
 */

const apiProxy = {
  buildController: function ({ name, endpoints, basePath }) {
    let controller = {};

    Object.keys(endpoints).forEach((endpoint) => {
      const url = basePath + endpoints[endpoint].url;
      const method = endpoints[endpoint].method;

      controller[endpoint] = ({ data } = {}) => {
        return performRequest({ method, url, data });
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

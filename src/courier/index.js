import Vue from 'vue';
import axios from 'axios';

import authEndpoints from './endpoints/auth';


const courier = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});



const performRequest = ({ method, url, data }) => {
  
	return courier({ method, url, data })
    .then((response) => {
      console.log("response:", response);
      return Promise.resolve(response.data);
    })

    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    })
}



const buildController = (name, endpoints, route) => {
	let controller = {};

	Object.keys(endpoints).forEach((endpoint) => {
		const url = route + endpoints[endpoint].url;
		const method = endpoints[endpoint].method;

		controller[endpoint] = function({ data }) {
			return performRequest({ method, url, data });
		}
	});

	courier[name] = controller;
}


buildController('auth', authEndpoints, '/auth');


Vue.prototype.$courier = courier;

export default courier;
import Vue from 'vue';

import { doRefreshToken } from '@/api-proxy/utils';
import auth from './endpoints/auth';
import team from './endpoints/team';



/* All endpoints: 1-1 mappable to API controllers */

const endpoints = {
	auth,
	team,
};



/* Exporting and Prototype appending */

const apiProxy = { doRefreshToken, ...endpoints };

Vue.prototype.$apiProxy = apiProxy;

export default apiProxy;
import { doRequest } from '@/api-proxy/utils'


export default {
	postLogin: function ({ data, config }) {
		let method = 'post';
		let url = '/auth/login';

		return doRequest({ method, url, data, config });
	},
}
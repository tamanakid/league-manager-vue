import { doRequest } from '@/api-proxy/utils'


export default {
	
	getInfo: function ({ params, data, config }) {
		let method = 'get';
		let url = `/team/${params.teamId}/get-info`;

		return doRequest({ method, url, data, config });
	},

	
	getPlayers: function ({ params, data, config }) {
		let method = 'get';
		let url = `/team/${params.teamId}/get-players`;

		return doRequest({ method, url, data, config });
	},
}
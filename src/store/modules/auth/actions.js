import apiProxy from '@/api-proxy';

import { AUTH_LOGIN, AUTH_LOGOUT  } from '@/store/modules/auth/mutations';


export default {
	doLogin ({ commit }, payload) {
		return apiProxy.auth.postLogin({ data: payload })
			.then((response) => {
				commit(AUTH_LOGIN, response);
				return Promise.resolve();
			})
			.catch(error => {
				return Promise.reject(error);
			})
	},

	doRefreshToken ({ commit }, payload) {
		return apiProxy.refreshToken()
			.then((data) => {
				commit(AUTH_LOGIN, data);
				console.log('navigate or do stuff');
				return Promise.resolve();
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	},

	handleInvalidRefresh ({ commit }) {
		commit(AUTH_LOGOUT);
	}
};

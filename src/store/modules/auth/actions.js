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

	/* Payload: request rejected by access token expiration */
	doRefreshToken ({ commit }, payload) {
		return apiProxy.refreshToken(payload)
			.then((pendingResponse) => {
				return Promise.resolve(pendingResponse);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	},

	handleInvalidRefresh ({ commit }, error) {
		commit(AUTH_LOGOUT);
		return Promise.reject(error);
	}
};

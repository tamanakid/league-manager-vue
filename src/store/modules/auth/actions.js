import apiProxy from '@/api-proxy';

import { AUTH_LOGIN, AUTH_LOGOUT  } from '@/store/modules/auth/mutations';


export default {
	async doRefreshToken ({ commit }) {
		try {
			let response = await apiProxy.doRefreshToken();
			commit(AUTH_LOGIN, response);
			return response;
		} catch (error) {
			console.log("You're not logged in");
			return Promise.reject(error);
		};
	},


	doLogin ({ commit }, payload) {
		return apiProxy.auth.postLogin({ data: payload })
			.then((response) => {
				commit(AUTH_LOGIN, response);
				return Promise.resolve();
			})
			.catch(error => {
				console.log("login invalid:", error);
				// return Promise.reject(error);
			})
	},


	handleInvalidRefresh ({ commit }, error) {
		commit(AUTH_LOGOUT);
		return Promise.reject(error);
	}
};

import api from '@/api'


export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_OPEN_LOGIN_DIALOG = 'AUTH_OPEN_LOGIN_DIALOG';
export const AUTH_CLOSE_LOGIN_DIALOG = 'AUTH_CLOSE_LOGIN_DIALOG';

export default {
	namespaced: true,

	state: {
		isLoginDialogOpen: false,
		accessToken: null,
	},

	getters: {
		isLoggedIn: state => {
			return state.accessToken !== null;
		},
	},

	mutations: {
		[AUTH_LOGIN] (state, payload) {
			state.accessToken = payload.accessToken;
		},

		[AUTH_OPEN_LOGIN_DIALOG] (state) {
			state.isLoginDialogOpen = true;
		},

		[AUTH_CLOSE_LOGIN_DIALOG] (state) {
			state.isLoginDialogOpen = false;
		},
	},

	actions: {
		doLogin (context, payload) {
			api.auth.postLogin({ data: payload })
				.then((response) => {
					console.log(response);
				})
		}
	}

}
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_OPEN_LOGIN_DIALOG = 'AUTH_OPEN_LOGIN_DIALOG';
export const AUTH_CLOSE_LOGIN_DIALOG = 'AUTH_CLOSE_LOGIN_DIALOG';
export const AUTH_LOGOUT = "AUTH_LOGOUT";


export default {
	[AUTH_LOGIN] (state, payload) {
		state.accessToken = payload.accessToken;
		if (payload.userId) {
			state.userId = payload.userId;
		}
	},

	[AUTH_LOGOUT] (state, payload) {
		state.accessToken = null;
		state.userId = null;
	},

	[AUTH_OPEN_LOGIN_DIALOG] (state) {
		state.isLoginDialogOpen = true;
	},

	[AUTH_CLOSE_LOGIN_DIALOG] (state) {
		state.isLoginDialogOpen = false;
	},
};

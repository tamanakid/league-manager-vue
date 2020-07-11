import { AUTH_OPEN_LOGIN_DIALOG, AUTH_CLOSE_LOGIN_DIALOG } from '@/store/modules/auth/mutations';


export const CUSTOM_ADD_AUTH_ACTION = 'CUSTOM_ADD_AUTH_ACTION';
export const CUSTOM_REMOVE_AUTH_ACTION = 'CUSTOM_REMOVE_AUTH_ACTION';


export default {
	namespaced: true,

	state: {
		actions: [],
		authActions: []
	},
	

	mutations: {
		[CUSTOM_ADD_AUTH_ACTION] (state, payload) {
			if (!state.actions.some((action) => action.name === payload.name)) {
				state.authActions.push(payload);
			}
		},

		[CUSTOM_REMOVE_AUTH_ACTION] (state, payload) {
			state.authActions = state.actions.filter((action) => action.name !== payload.name);
		},
	},


	actions: {
		// Add/Remove Login Action Button
		addLoginAction ({ commit, state }) {
			commit(CUSTOM_ADD_AUTH_ACTION, {
				name: 'login',
				label: 'Login',
				icon: 'mdi-login-variant',
				method: (() => commit(`auth/${AUTH_OPEN_LOGIN_DIALOG}`, null, { root: true }))
			});
		},
		removeLoginAction ({ commit }) {
			commit(CUSTOM_REMOVE_AUTH_ACTION, { name: 'login' });
			commit(`auth/${AUTH_CLOSE_LOGIN_DIALOG}`, null, { root: true });
		},
	}

}
import { AUTH_OPEN_LOGIN_DIALOG } from '@/store/modules/auth/mutations';


export const CUSTOM_ADD_ACTION = 'CUSTOM_ADD_ACTION';
export const CUSTOM_SET_ACTIONS = 'CUSTOM_SET_ACTIONS';
export const CUSTOM_REMOVE_ACTION = 'CUSTOM_REMOVE_ACTION';
export const CUSTOM_CLEAR_ACTIONS = 'CUSTOM_CLEAR_ACTIONS';


export default {
	namespaced: true,

	state: {
		actions: [],
	},

	getters: {
		getActions: state => {
			return state.actions;
		}
	},

	mutations: {
		[CUSTOM_ADD_ACTION] (state, payload) {
			state.actions.push(payload);
		},

		[CUSTOM_SET_ACTIONS] (state, payload) {
			state.actions = payload;
		},

		[CUSTOM_REMOVE_ACTION] (state, payload) {
			state.actions = state.actions.filter((action) => action.name !== payload.name);
		},

		[CUSTOM_CLEAR_ACTIONS] (state) {
			state.actions = [];
		}
	},

	actions: {
		// Add/Remove Login Action Button
		addLoginAction ({ commit }) {
			commit(CUSTOM_ADD_ACTION, {
				name: 'login',
				label: 'Login',
				icon: 'mdi-login-variant',
				method: (() => commit(`auth/${AUTH_OPEN_LOGIN_DIALOG}`, null, { root: true }))
			});
		},
		removeLoginAction ({ commit }) {
			commit(CUSTOM_REMOVE_ACTION, { name: 'login' });
		},
	}

}
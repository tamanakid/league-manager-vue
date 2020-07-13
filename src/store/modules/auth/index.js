import getters from './getters';
import mutations from './mutations';
import actions from './actions';


export default {
	namespaced: true,

	state: {
		isLoginDialogOpen: false,
		accessToken: null,
		userId: null,
		username: null,
	},

	getters,
	mutations,
	actions,
};

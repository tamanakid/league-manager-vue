export default {
	isLoggedIn: state => {
		return state.accessToken !== null;
	},
};

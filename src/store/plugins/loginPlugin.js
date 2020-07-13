import { getMutationType } from '@/store/plugins/utils';
import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/modules/auth/mutations';



const loginPlugin = store => {

	/* Initialize Store Plugin: Call refreshToken endpoint */
	store.dispatch('auth/doRefreshToken')
		.catch(() => {
			store.dispatch('custom/addLoginAction');
			// store.dispatch('nav/setLoggedItems');
		});


  store.subscribe((mutation) => {
		const mutationType = getMutationType(mutation.type);
    if ((mutationType === AUTH_LOGIN) || (mutationType === AUTH_LOGOUT)) {
			if (!store.getters['auth/isLoggedIn']) {
				store.dispatch('custom/addLoginAction');
				// store.dispatch('nav/setLoggedItems');
			} else {
				store.dispatch('custom/removeLoginAction');
				// store.dispatch('nav/setUnloggedItems');
			}
		}
  });
}



export default loginPlugin;
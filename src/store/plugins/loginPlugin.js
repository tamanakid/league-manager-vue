import { getMutationType } from '@/store/plugins/utils';
import { AUTH_LOGIN } from '@/store/modules/auth/mutations';



const loginPlugin = store => {

	/* Initialize Store Plugin: Call refreshToken endpoint */
	store.dispatch('auth/doRefreshToken')
		.catch(() => {
			store.dispatch('custom/addLoginAction');
		});


  store.subscribe((mutation) => {
		const mutationType = getMutationType(mutation.type);
    if (mutationType === AUTH_LOGIN) {
			if (!store.getters['auth/isLoggedIn']) {
				store.dispatch('custom/addLoginAction');
			} else {
				store.dispatch('custom/removeLoginAction');
			}
		}
  });
}



export default loginPlugin;
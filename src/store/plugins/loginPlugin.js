import { AUTH_LOGIN } from '@/store/modules/auth';



const loginPlugin = store => {

	/* Initialize Store Plugin: Call refreshToken endpoint */
	store.dispatch('auth/doRefreshToken')
		.catch(() => {
			store.dispatch('custom/addLoginAction');
		});


  store.subscribe((mutation) => {
    if (mutation.type === AUTH_LOGIN) {
			if (!store.getters['auth/isLoggedIn']) {
				store.dispatch('custom/addLoginAction');
			} else {
				store.dispatch('custom/removeLoginAction');
			}
		}
  });
}



export default loginPlugin;
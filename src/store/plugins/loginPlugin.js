import { AUTH_LOGIN } from '@/store/modules/auth';
import { CUSTOM_ADD_ACTION, CUSTOM_REMOVE_ACTION } from '@/store/modules/custom';


const loginPlugin = store => {

	// Initialize Store Plugin
	if (!store.getters['auth/isLoggedIn']) {
		store.dispatch('custom/addLoginAction');
	}


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
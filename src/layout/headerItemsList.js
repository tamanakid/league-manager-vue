import store from '@/store';
import router from '@/router';

import { AUTH_OPEN_LOGIN_DIALOG, AUTH_LOGOUT } from '@/store/modules/auth/mutations';


const headerItemsList = [
	{
		name: 'leagues',
		label: 'Leagues',
		icon: 'mdi-trophy',
		method: (() => router.push({ name: 'leagues' })),
		isActiveWhenLogged: true,
		isActiveWhenUnlogged: true,
	},
	
	{
		name: 'register',
		label: 'Register',
		icon: 'mdi-account-multiple-plus',
		method: (() => router.push({ name: 'register' })),
		isActiveWhenLogged: false,
		isActiveWhenUnlogged: true,
	},
	
	{
		name: 'login',
		label: 'Log In',
		icon: 'mdi-login-variant',
		method: (() => store.commit(`auth/${AUTH_OPEN_LOGIN_DIALOG}`)),
		isActiveWhenLogged: false,
		isActiveWhenUnlogged: true,
	},

	{
		name: 'dashboard',
		label: 'My Dashboard',
		icon: 'mdi-newspaper',
		method: (() => router.push({ name: 'dashboard' })),
		isActiveWhenLogged: true,
		isActiveWhenUnlogged: false,
	},

	{
		name: 'user',
		label: 'User settings',
		icon: 'mdi-account-cog',
		method: (() => router.push({ name: 'user' })),
		isActiveWhenLogged: true,
		isActiveWhenUnlogged: false,
	},

	{
		name: 'logout',
		label: 'Log out',
		icon: 'mdi-login-variant',
		method: (() => store.commit(`auth/${AUTH_LOGOUT}`)),
		isActiveWhenLogged: true,
		isActiveWhenUnlogged: false,
	},

];


export default headerItemsList;
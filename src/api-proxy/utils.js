import axiosInstance from '@/api-proxy/axiosInstance';
import store from '@/store';



const API_INVALID_TOKEN = "AUTH_INVALID_TOKEN";


/* Get errorCode field from a rejected request */

function getErrorCode(error) {
	return (error && error.response && error.response.data && error.response.data.errorCode);
}



/* Request Interceptor to add Authorization header */

axiosInstance.interceptors.request.use(function addAuthenticationHeader(config) {
	if (store.getters['auth/isLoggedIn']) {
		config.headers.Authorization = store.state.auth.accessToken
	}
	return config;
});



/* Generic request execution and handling using the proxy instance */

export async function doRequest({ method, url, data, config }, refetch = false) {
	try {
		let response = await axiosInstance({ method, url, data});
		return response.data;

	} catch (error) {
		if ((getErrorCode(error) === API_INVALID_TOKEN) && !refetch) {
			try {
				await store.dispatch('auth/doRefreshToken');
				return doRequest({ method, url, data, config }, true);
			} catch (error) {
				return Promise.reject(error.response);
			}
		}
		return Promise.reject(error.response);
	}
}



/* Refresh-token endpoint */

export async function doRefreshToken() {
	let response = await axiosInstance.post('/auth/refresh-token');
	return response.data;
}
import store from '@/store';


const API_INVALID_TOKEN = "AUTH_INVALID_TOKEN";
const API_INVALID_REFRESH_TOKEN = "AUTH_INVALID_REFRESH_TOKEN";



function factory (courier) {

	/* Get errorCode field from a rejected request */
	function getErrorCode(error) {
		return (error && error.response && error.response.data && error.response.data.errorCode);
	}


	/* Generic request execution and handling using the courier instance */
	async function executeRequest ({ method, url, data }) {
		try {
			const response = await courier({ method, url, data });
			console.log("response:", response);
			return Promise.resolve(response.data);    
		}

		catch (error) {
			if (getErrorCode(error) === API_INVALID_TOKEN) {
				return store.dispatch('auth/doRefreshToken', { method, url, data });
			}
			return Promise.reject(error);
		}
	}


	/* Refresh-token endpoint */
	async function refreshToken (request) {
		let response;
		try {
			response = await courier.post('/auth/refresh-token');
			store.commit(AUTH_LOGIN, response.data);
			console.log('navigate or do stuff');
			return executeRequest(request);
		} 
		
		catch (error) {
			if (getErrorCode(error) === API_INVALID_REFRESH_TOKEN) {
				return store.dispatch('auth/handleInvalidRefresh', error);
			}
			return Promise.reject(error);
		}
	}


	/* Build controllers for the api proxy */
	function buildController ({ name, endpoints, basePath }) {
		let controller = {};

		Object.keys(endpoints).forEach((endpoint) => {
			const url = basePath + endpoints[endpoint].url;
			const method = endpoints[endpoint].method;

			controller[endpoint] = ({ data } = {}) => {
				return executeRequest({ method, url, data });
			}
		});

		this[name] = controller;
	}

	
	return { buildController, refreshToken };

};



export default factory;
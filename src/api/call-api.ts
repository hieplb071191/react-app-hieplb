import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const instanceAxios = axios.create({
	baseURL: 'http://localhost:3001',
	timeout: 300000,
	headers: {
		'Content-type': 'application/x-www-form-urlencoded',
	},
	withCredentials: true,
});

instanceAxios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (!error.response) return Promise.reject({ error: 'Não foi possível concluir a operação, tente novamente' });
	}
);

export const httpAuthGetRequest = async (url: string, params?: any) => {
	let token;
	if (window && window.localStorage) {
		token = window.localStorage.getItem('token');
	}
	if (token) {
		instanceAxios.defaults.headers.Authorization = `Bearer ${token}`;
	}
	return instanceAxios.get(url, {
		params: params,
	});
};

export const httpAuthPostRequest = async (url: string, params: any) => {
	let token;
	if (window && window.localStorage) {
		token = window.localStorage.getItem('token');
	}
	if (token) {
		instanceAxios.defaults.headers.Authorization = `Bearer ${token}`;
	}
	return instanceAxios.post(url, params);
};

export const httpPostRequest = async (url: string, data: any) => {
	const baseUrl = process.env.BACKEND_BASE_URL;
	// try {
	const options: AxiosRequestConfig = {
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
		},
	};
	console.log(url);
	const response = await axios.post(baseUrl + url, data, options);
	return response;
	// } catch (e) {
	// 	console.log(e);
	// }
};

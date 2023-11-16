import { httpPostRequest } from '@/api/call-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setEmail } from '../slices/signup-google.slice';
import { setToken } from '../slices/token.slice';

export const loginThunk = createAsyncThunk('user/login', async (params: any, thunkApi) => {
	try {
		const res = await httpPostRequest('/auth/signin', params);
		return res?.data?.access_token;
	} catch (e) {
		return null;
	}
});

export const loginWithGoogleThunk = createAsyncThunk('/user/signinWithgoogle', async (params: any, thunkApi) => {
	httpPostRequest('/auth/signinWithGoogle', params)
		.then((res) => {
			if (res && res.data?.access_token) {
				thunkApi.dispatch(setToken(res.data?.access_token));
			}
		})
		.catch((e) => {
			if (e.response?.data?.data?.email) {
				thunkApi.dispatch(setEmail(e.response?.data?.data?.email));
				window.location.href = '/signup-with-google';
			}
		});
});

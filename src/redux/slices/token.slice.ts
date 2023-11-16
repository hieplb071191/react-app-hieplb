import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginThunk, loginWithGoogleThunk } from '../thunks/token.thunk';

export interface TokenSlice {
	token: string;
	isLoading: boolean;
}

export const tokenInitialState: TokenSlice = {
	token: 'token',
	isLoading: false,
};

const tokenSlice = createSlice({
	name: 'token',
	initialState: tokenInitialState,
	reducers: {
		setToken: (state, actions) => {
			state.token = actions.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginThunk.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(loginThunk.fulfilled, (state, action) => {
			console.log(action);
			state.token = action.payload;
		});

		builder.addCase(loginWithGoogleThunk.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(loginWithGoogleThunk.fulfilled, (state, action) => {
			state.isLoading = false;
		});
	},
});

const { setToken } = tokenSlice.actions;
export { setToken };

export default tokenSlice.reducer;

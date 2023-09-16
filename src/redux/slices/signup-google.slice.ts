import { createSlice } from '@reduxjs/toolkit';

interface SignupGoogleSliceInterface {
	email: string;
	isLoading: false;
}
export const signupGoogleInitialState: SignupGoogleSliceInterface = {
	email: '',
	isLoading: false,
};

const signupGoogleSlice = createSlice({
	name: 'googleSlice',
	initialState: signupGoogleInitialState,
	reducers: {
		setEmail: (state, actions) => {
			state.email = actions.payload;
		},
	},
});

const { setEmail } = signupGoogleSlice.actions;
export { setEmail };

export default signupGoogleSlice.reducer;

import { combineReducers } from '@reduxjs/toolkit';
import tokenSlice from './slices/token.slice';
import signupGoogleSlice from './slices/signup-google.slice';

('./slices/token.slice');

const rootReducer = combineReducers({
	token: tokenSlice,
	google: signupGoogleSlice,
});

export { rootReducer };

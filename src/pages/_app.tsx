import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/redux/store';
import { Layout } from '@/components/layouts/layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<GoogleOAuthProvider clientId={`${process.env.GOOGLE_ID}`}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PersistGate>
			</Provider>
		</GoogleOAuthProvider>
	);
}

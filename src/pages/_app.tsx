import '@/styles/globals.css';
import '@/styles/scss/global.scss';
import type { AppProps } from 'next/app';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/redux/store';
import { Layout } from '@/components/layouts/layout';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Suspense
			fallback={
				<>
					<Spin size={'large'}></Spin>
				</>
			}
		>
			<GoogleOAuthProvider clientId={`${process.env.GOOGLE_ID}`}>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</PersistGate>
				</Provider>
			</GoogleOAuthProvider>
		</Suspense>
	);
};
export default App;

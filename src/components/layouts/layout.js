import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main style={{ marginBottom: '70px' }}>{children}</main>
			<Footer />
		</>
	);
};

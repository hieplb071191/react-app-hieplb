import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div>
				<main style={{ marginBottom: '70px', marginTop: '0px' }}>{children}</main>
			</div>
			<Footer />
		</>
	);
};

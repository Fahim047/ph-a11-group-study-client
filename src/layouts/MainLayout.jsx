import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<div className="min-h-screen">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;

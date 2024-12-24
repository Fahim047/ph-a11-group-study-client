import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <HomePage />,
			},
			{
				path: '/login',
				element: 'Login',
			},
		],
	},
]);
export default router;

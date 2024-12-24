import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AssignmentsPage from '../pages/AssignmentsPage';
import CreateAssignmentPage from '../pages/CreateAssignmentPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
	{
		errorElement: 'Error',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				index: true,
				element: <HomePage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/assignments',
				element: <AssignmentsPage />,
			},
			{
				path: '/assignments/create',
				element: <CreateAssignmentPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
export default router;

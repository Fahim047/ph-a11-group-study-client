import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AssignmentDetailsPage from '../pages/AssignmentDetailsPage';
import AssignmentsPage from '../pages/AssignmentsPage';
import CreateAssignmentPage from '../pages/CreateAssignmentPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MyAssignmentsPage from '../pages/MyAssignmentsPage';
import NotFoundPage from '../pages/NotFoundPage';
import PendingAssignments from '../pages/PendingAssignmentsPage';

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
				path: '/assignment/:id',
				element: <AssignmentDetailsPage />,
			},
			{
				path: '/assignments/create',
				element: <CreateAssignmentPage />,
			},
			{
				path: '/my-assignments',
				element: <MyAssignmentsPage />,
			},
			{
				path: '/assignments/pending',
				element: <PendingAssignments />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
export default router;

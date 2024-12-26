import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AssignmentDetailsPage from '../pages/AssignmentDetailsPage';
import AssignmentsPage from '../pages/AssignmentsPage';
import CreateAssignmentPage from '../pages/CreateAssignmentPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MyAssignmentsPage from '../pages/MyAssignmentsPage';
import MySubmissionsPage from '../pages/MySubmissionPage';
import NotFoundPage from '../pages/NotFoundPage';
import PendingAssignments from '../pages/PendingAssignmentsPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
	{
		errorElement: <NotFoundPage />,
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
				path: '/register',
				element: <RegisterPage />,
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
				element: (
					<PrivateRoutes>
						<CreateAssignmentPage />,
					</PrivateRoutes>
				),
			},
			{
				path: '/my-assignments',
				element: (
					<PrivateRoutes>
						<MyAssignmentsPage />,
					</PrivateRoutes>
				),
			},
			{
				path: '/my-submissions',
				element: (
					<PrivateRoutes>
						<MySubmissionsPage />,
					</PrivateRoutes>
				),
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

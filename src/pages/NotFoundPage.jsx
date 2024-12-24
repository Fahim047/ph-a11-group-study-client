import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 text-center">
				<div className="space-y-4">
					<h1 className="text-9xl font-extrabold text-blue-600">404</h1>
					<h2 className="text-4xl font-bold text-gray-900">Page Not Found</h2>
					<p className="text-xl text-gray-600">
						Oops! The page you're looking for doesn't exist.
					</p>
				</div>
				<div className="space-y-4">
					<div className="flex justify-center space-x-4">
						<Link
							to="/"
							className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Go Home Now
						</Link>
						<button
							onClick={() => window.history.back()}
							className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Go Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Illustration from '../assets/undraw_sign-up.svg';
import { useAuth } from '../hooks';
import { validatePassword } from '../utils/validatePassword';
const RegisterPage = () => {
	const { createUser, handleLogout, handleUpdateProfile } = useAuth();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [photoURL, setPhotoURL] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		const passwordErrors = validatePassword(password, confirmPassword);
		if (passwordErrors.length > 0) {
			setError(`${passwordErrors.join(', ')}`);
			setIsLoading(false);
			return;
		}

		try {
			await createUser(email, password);
			await handleUpdateProfile({ displayName: name, photoURL });
			await handleLogout();
			toast.success('Registration successful.');
			navigate('/login');
		} catch (err) {
			setError('Something went wrong!');
			console.error('Registration error:', err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="hidden md:block w-1/3 mr-8">
				<img
					src={Illustration}
					alt="Register Illustration"
					className="w-full h-auto rounded-xl"
				/>
			</div>
			<div className="dark:bg-blue-100 max-w-md p-6 w-full space-y-6 shadow-md rounded-xl">
				<h2 className="text-center text-3xl font-extrabold text-gray-900">
					Create your account
				</h2>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<label htmlFor="name" className="sr-only">
								Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								className="bg-transparent appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="bg-transparent appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="photo-url" className="sr-only">
								Photo URL
							</label>
							<input
								id="photo-url"
								name="photoURL"
								type="url"
								className="bg-transparent appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Photo URL (optional)"
								value={photoURL}
								onChange={(e) => setPhotoURL(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="new-password"
								required
								className="bg-transparent appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="confirmPassword" className="sr-only">
								Confirm Password
							</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								required
								className="bg-transparent appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Rewrite Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>

					{error && <div className="text-red-500 text-sm mt-2">{error}</div>}

					<div>
						<button
							type="submit"
							disabled={isLoading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
						>
							{isLoading ? 'Registering...' : 'Register'}
						</button>
					</div>
				</form>

				<div className="text-gray-600 text-sm text-center">
					Already have an account?{' '}
					<Link to="/login" className="text-blue-600 hover:text-blue-500">
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;

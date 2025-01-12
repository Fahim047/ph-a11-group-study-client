import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleImage from '../assets/google.svg';
import apiClient from '../axios/apiClient';
import { useAuth } from '../hooks';
const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const { handleSignInWithGoogle, handleSignInWithEmail } = useAuth();

	const handleEmailLogin = async (e) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		try {
			const result = await handleSignInWithEmail(email, password);
			const user = { email: result?.user?.email };
			const response = await apiClient.post(`/jwt`, user);
			console.log(response.data);
			toast.success('Login successful');
			navigate(location?.state || '/');
			setEmail('');
			setPassword('');
		} catch (err) {
			setError(
				'Failed to log in. Please check your credentials and try again.'
			);
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleGoogleLogin = async () => {
		setError('');
		setIsLoading(true);
		try {
			const result = await handleSignInWithGoogle();
			const user = { email: result?.user?.email };
			const response = await apiClient.post(`/jwt`, user);
			console.log(response.data);
			toast.success('Logged in successfully!');
			navigate(location?.state || '/');
		} catch (err) {
			setError('Failed to login. Please try again.');
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="bg-blue-100 max-w-md p-6 w-full space-y-8 shadow-md rounded-xl">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
				</div>
				<form className="card mt-8 space-y-6" onSubmit={handleEmailLogin}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm space-y-4">
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
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="bg-transparent appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div className="flex items-center justify-end">
						<div className="text-sm">
							<Link
								to="/forgot-password"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								Forgot your password?
							</Link>
						</div>
					</div>

					{error && <div className="text-red-500 text-sm mt-2">{error}</div>}

					<div>
						<button
							type="submit"
							disabled={isLoading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
						>
							{isLoading ? 'Signing in...' : 'Sign in'}
						</button>
					</div>
				</form>

				<div className="mt-6">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300" />
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 text-gray-500">Or</span>
						</div>
					</div>

					<div className="mt-6">
						<button
							onClick={handleGoogleLogin}
							disabled={isLoading}
							className="w-full flex justify-center items-center gap-4 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
						>
							<img src={GoogleImage} alt="google" className="w-4 h-4" />
							Sign in with Google
						</button>
					</div>
				</div>

				<div className="text-gray-600 text-sm text-center">
					Don&apos;t have an account?{' '}
					<Link
						to="/register"
						className="font-medium text-blue-600 hover:text-blue-500"
					>
						Register here
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

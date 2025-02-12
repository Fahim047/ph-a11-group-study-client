import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import GoogleImage from '../assets/google.svg';
import Illustration from '../assets/undraw_login.svg';
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
			await apiClient.post(`/jwt`, user);
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
			await apiClient.post(`/jwt`, user);
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
		<div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col md:flex-row items-center bg-white dark:bg-blue-100 max-w-4xl p-8 w-full space-y-8 md:space-y-0 md:space-x-8 shadow-lg rounded-xl">
				<div className="hidden md:block w-1/2">
					<img
						src={Illustration}
						alt="Sign In Illustration"
						className="w-full h-auto rounded-xl"
					/>
				</div>
				<div className="w-full md:w-1/2 p-6 shadow-md rounded-xl">
					<h2 className="text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
					<form className="mt-6 space-y-6" onSubmit={handleEmailLogin}>
						<div className="space-y-4">
							<input
								type="email"
								placeholder="Email address"
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<input
								type="password"
								placeholder="Password"
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="text-right">
							<Link
								to="/forgot-password"
								className="text-blue-600 hover:text-blue-500"
							>
								Forgot your password?
							</Link>
						</div>
						{error && <div className="text-red-500 text-sm">{error}</div>}
						<button
							type="submit"
							disabled={isLoading}
							className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
						>
							{isLoading ? 'Signing in...' : 'Sign in'}
						</button>
					</form>
					<div className="mt-6 text-center">Or</div>
					<button
						onClick={handleGoogleLogin}
						disabled={isLoading}
						className="w-full flex items-center justify-center gap-4 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
					>
						<img src={GoogleImage} alt="Google" className="w-5 h-5" />
						Sign in with Google
					</button>
					<div className="mt-6 text-center text-gray-600">
						Don't have an account?{' '}
						<Link to="/register" className="text-blue-600 hover:text-blue-500">
							Register here
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

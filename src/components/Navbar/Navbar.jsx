import { LogOut, Menu, Moon, PlusCircle, Send, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, useTheme } from '../../hooks';

const Navbar = () => {
	const { user, handleLogout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { darkMode, setDarkMode } = useTheme();
	const navigate = useNavigate();

	const logout = async () => {
		await handleLogout();
		navigate('/');
		toast.success('Logged out successfully.');
	};

	const toggleTheme = () => setDarkMode(!darkMode);

	const NavItem = ({ to, children, exact }) => (
		<NavLink
			to={to}
			end={exact}
			className={({ isActive }) =>
				`px-4 py-2 text-sm font-medium rounded-md ${
					isActive
						? 'text-blue-600 bg-indigo-50'
						: 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
				}`
			}
		>
			{children}
		</NavLink>
	);

	return (
		<nav
			className={`sticky top-0 z-50 shadow-md transition duration-300 ${
				darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
			}`}
		>
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				{/* Logo */}
				<Link to="/" className="text-2xl font-bold text-blue-600">
					StudyMate
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:items-center md:space-x-6">
					<NavItem to="/assignments" exact={true}>
						Assignments
					</NavItem>
					{user && (
						<>
							<NavItem to="/assignments/pending" exact={true}>
								Pending Assignments
							</NavItem>
						</>
					)}
				</div>

				{/* Right Section */}
				<div className="flex items-center space-x-4">
					{/* Theme Toggle */}
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full focus:outline-none"
						aria-label="Toggle Theme"
					>
						{darkMode ? (
							<Sun className="h-6 w-6" />
						) : (
							<Moon className="h-6 w-6" />
						)}
					</button>

					{/* User Dropdown */}
					{user ? (
						<div className="relative">
							<button
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								className="flex items-center space-x-2 focus:outline-none"
							>
								<img
									src={user?.photoURL || 'https://i.pravatar.cc/150'}
									alt="User avatar"
									className="w-8 h-8 rounded-full"
								/>
								<span className="hidden md:block">{user.displayName}</span>
							</button>
							{isDropdownOpen && (
								<div
									className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md`}
								>
									<ul className="py-2">
										<li className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<Link
												to="/assignments/create"
												className="block px-4 py-2 text-sm"
												onClick={() => setIsDropdownOpen(false)}
											>
												<PlusCircle className="inline-block mr-2 h-5 w-5" />
												Create Assignments
											</Link>
										</li>
										{/* <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<Link
												to="/my-assignments"
												className="block px-4 py-2 text-sm"
												onClick={() => setIsDropdownOpen(false)}
											>
												<PlusCircle className="inline-block mr-2 h-5 w-5" />
												My Assignments
											</Link>
										</li> */}
										<li className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<Link
												to="/my-submissions"
												className="block px-4 py-2 text-sm"
												onClick={() => setIsDropdownOpen(false)}
											>
												<Send className="inline-block mr-2 h-5 w-5" />
												My Submissions
											</Link>
										</li>
										<li>
											<button
												className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
												onClick={logout}
											>
												<LogOut className="inline-block mr-2 h-5 w-5" />
												Logout
											</button>
										</li>
									</ul>
								</div>
							)}
						</div>
					) : (
						<Link
							to="/login"
							className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
						>
							Log in
						</Link>
					)}
				</div>

				{/* Mobile Menu Toggle */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden p-2 rounded-md border focus:outline-none"
					aria-label="Toggle Menu"
				>
					{isMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden bg-gray-100 dark:bg-gray-800 px-4 pt-2 pb-3 space-y-1">
					<NavLink
						to="/assignments"
						className="block text-sm px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						Assignments
					</NavLink>
					{user && (
						<>
							<NavLink
								to="/assignments/pending"
								className="block text-sm px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								Pending Assignments
							</NavLink>
							<NavLink
								to="/assignments/create"
								className="block text-sm px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								Create Assignments
							</NavLink>
							{/* <NavLink
								to="/my-assignments"
								className="block text-sm px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								My Assignments
							</NavLink> */}
							<NavLink
								to="/my-submissions"
								className="block text-sm px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								My Submissions
							</NavLink>
						</>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;

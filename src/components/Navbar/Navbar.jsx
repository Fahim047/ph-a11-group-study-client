import {
	BarChart,
	DollarSign,
	Heart,
	// Home,
	LogOut,
	Menu,
	Moon,
	PlusCircle,
	Send,
	Sun,
	X,
} from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, useTheme } from '../../hooks';

const Navbar = () => {
	const { user, handleLogout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { darkMode, setDarkMode } = useTheme();
	const navigate = useNavigate();

	const logout = async () => {
		await handleLogout();
		navigate('/');
		toast.success('Logged out successfully.');
	};

	const toggleTheme = () => setDarkMode(!darkMode);

	const NavItem = ({ to, children, onClick, exact }) => (
		<NavLink
			to={to}
			end={exact}
			className={({ isActive }) =>
				`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${
					isActive
						? 'text-blue-600 bg-indigo-50'
						: 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
				}`
			}
			onClick={onClick}
		>
			{children}
		</NavLink>
	);

	const MobileNavItem = ({ to, icon: Icon, children, onClick, exact }) => (
		<NavLink
			to={to}
			end={exact}
			className={({ isActive }) =>
				`flex items-center px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out ${
					isActive
						? 'text-indigo-600 bg-indigo-50'
						: 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
				}`
			}
			onClick={onClick}
		>
			<Icon className="mr-3 h-5 w-5" />
			{children}
		</NavLink>
	);

	return (
		<nav
			className={`sticky top-0 z-50 shadow-lg transition-colors duration-300 ${
				darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
			}`}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<Link to="/" className="text-2xl font-bold text-blue-600">
						StudyMate
					</Link>

					{/* Desktop Nav */}
					<div className="hidden md:flex md:items-center md:space-x-6">
						{/* <NavItem to="/" exact={true}>
							Home
						</NavItem> */}
						<NavItem to="/assignments" exact={true}>
							Assignments
						</NavItem>
						{user && (
							<>
								<NavItem to="/assignments/pending" exact={true}>
									Pending Assignments
								</NavItem>
								<NavItem to="/assignments/create" exact={true}>
									Create Assignments
								</NavItem>
								<NavItem to="/my-assignments" exact={true}>
									My Assignments
								</NavItem>
							</>
						)}
					</div>

					{/* Right Side */}
					<div className="flex items-center space-x-4">
						{/* Theme Toggle Button */}
						<button
							onClick={toggleTheme}
							className="p-2 rounded-full focus:outline-none transition duration-300"
							aria-label="Toggle Theme"
						>
							{darkMode ? (
								<Sun className="h-6 w-6" />
							) : (
								<Moon className="h-6 w-6" />
							)}
						</button>

						{/* User Dropdown or Login Button */}
						{user ? (
							<div className="dropdown dropdown-end">
								<button
									className="btn btn-ghost btn-circle avatar"
									tabIndex={0}
								>
									<div className="w-10 rounded-full">
										<img
											src={user?.photoURL || 'https://i.pravatar.cc/150'}
											alt="User avatar"
											title={user?.displayName}
											referrerPolicy="no-referrer"
										/>
									</div>
								</button>
								<ul
									tabIndex={0}
									className={`menu menu-compact dropdown-content mt-3 p-2 shadow-lg rounded-box w-60`}
								>
									<li>
										<span className="font-semibold text-sm px-4">
											{user?.displayName}
										</span>
									</li>
									<li>
										<Link to="/assignments/create">
											<PlusCircle className="mr-2 h-5 w-5" />
											Create Assignments
										</Link>
									</li>
									<li>
										<Link to="/my-assignments">
											<Heart className="mr-2 h-5 w-5" />
											My Assignments
										</Link>
									</li>
									<li>
										<Link to="/my-submissions">
											<Send className="mr-2 h-5 w-5" />
											My Submissions
										</Link>
									</li>
									<li>
										<button
											className="btn btn-error text-white mt-2"
											onClick={logout}
										>
											<LogOut className="mr-2 h-5 w-5" />
											Logout
										</button>
									</li>
								</ul>
							</div>
						) : (
							<Link
								to="/login"
								className={`px-3 py-2 rounded-md text-sm font-medium  bg-blue-600 text-white hover:bg-blue-700
							`}
							>
								Log in
							</Link>
						)}
					</div>

					{/* Mobile Menu Toggle */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 rounded-md border focus:outline-none"
					>
						{isMenuOpen ? (
							<X className="block h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="block h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>

				{/* Mobile Nav */}
				{isMenuOpen && (
					<div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{/* <MobileNavItem
							to="/"
							exact={true}
							icon={Home}
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</MobileNavItem> */}
						<MobileNavItem
							to="/assignments"
							exact={true}
							icon={BarChart}
							onClick={() => setIsMenuOpen(false)}
						>
							Assignments
						</MobileNavItem>
						{user && (
							<>
								<MobileNavItem
									to="/assignments/pending"
									exact={true}
									icon={DollarSign}
									onClick={() => setIsMenuOpen(false)}
								>
									Pending Assignments
								</MobileNavItem>
								<MobileNavItem
									to="/assignments/create"
									exact={true}
									icon={PlusCircle}
									onClick={() => setIsMenuOpen(false)}
								>
									Create Assignments
								</MobileNavItem>
								<MobileNavItem
									to="/my-assignments"
									exact={true}
									icon={Heart}
									onClick={() => setIsMenuOpen(false)}
								>
									My Assignments
								</MobileNavItem>
								<MobileNavItem
									to="/my-submissions"
									exact={true}
									icon={Send}
									onClick={() => setIsMenuOpen(false)}
								>
									My Submissions
								</MobileNavItem>
							</>
						)}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;

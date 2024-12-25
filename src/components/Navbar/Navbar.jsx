import {
	BarChart,
	DollarSign,
	Heart,
	Home,
	LogOut,
	Menu,
	PlusCircle,
	X,
} from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks';

const Navbar = () => {
	const { user, handleLogout } = useAuth();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	const logout = async () => {
		await handleLogout();
		navigate('/');
		toast.success('Logged out successfully.');
	};

	const NavItem = ({ to, children, onClick, exact }) => (
		<NavLink
			to={to}
			end={exact}
			className={({ isActive }) =>
				`px-3 py-2 rounded-md text-sm text-nowrap font-medium transition duration-150 ease-in-out ${
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
		<nav className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 text-white sticky top-0 z-50 shadow-lg">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between">
					<div className="flex items-center">
						<Link to="/" className="flex-shrink-0 flex items-center">
							<span className="text-2xl font-bold">StudyMate</span>
						</Link>
						<div className="hidden md:ml-6 md:flex md:flex-wrap gap-2">
							<NavItem to="/" exact={true}>
								Home
							</NavItem>
							<NavItem to="/assignments" exact={true}>
								Assignments
							</NavItem>
							{user && (
								<>
									<NavItem to="/assignments/pending" exact={true}>
										Pending Assignments
									</NavItem>
									{/* <NavItem to="/assignments/create" exact={true}>
										Create Assignments
									</NavItem>
									<NavItem to="/assignments/attempted" exact={true}>
										My Attempted Assignments
									</NavItem> */}
								</>
							)}
						</div>
					</div>
					<div className="hidden md:ml-2 md:flex md:items-center">
						{user ? (
							<div className="flex items-center space-x-4">
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
										className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-white text-gray-500  rounded-box w-60"
									>
										<li>
											<span className="font-semibold text-sm px-4 text-gray-500">
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
												My Attempted Assignments
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
							</div>
						) : (
							<div>
								<Link
									to="/login"
									className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
								>
									Log in
								</Link>
							</div>
						)}
					</div>
					<div className="-mr-2 flex items-center md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md border border-white focus:outline-none focus:ring-2 focus:ring-inset"
						>
							<span className="sr-only">Open main menu</span>
							{isMenuOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<MobileNavItem
							to="/"
							exact={true}
							icon={Home}
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</MobileNavItem>
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
									My Attempted Assignments
								</MobileNavItem>
							</>
						)}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

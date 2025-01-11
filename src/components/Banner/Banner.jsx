import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
	return (
		<section className="mx-auto max-w-screen-xl px-4 py-16 lg:py-32 lg:flex lg:items-center">
			<div className="mx-auto max-w-3xl text-center">
				<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
					Study Together.
					<span className="sm:block"> Grow Together.</span>
				</h1>

				<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
					Study together with your peers and get a chance to win exciting prizes
				</p>

				<div className="mt-8 flex flex-wrap justify-center gap-4">
					<Link
						to="/login"
						className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
						href="#"
					>
						Get Started
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Banner;

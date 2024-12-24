import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
	const assignments = [
		{
			title: 'Submit your assignment',
			description:
				'Submit your assignment and get a chance to win exciting prizes',
			image:
				'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			cta: 'Submit',
		},
	];

	return (
		<section id="banner">
			<div className="max-w-7xl mx-auto px-4">
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					loop={true}
					className="rounded-xl shadow-2xl z-10"
				>
					{assignments.map((assignment, index) => (
						<SwiperSlide key={index}>
							<div className="relative h-[400px] md:h-[500px]">
								<img
									src={assignment.image}
									alt={assignment.title}
									className="w-full h-full object-cover rounded-xl"
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex flex-col justify-center items-start text-left px-8 md:px-16">
									<h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
										{assignment.title}
									</h2>
									<p className="text-white text-lg md:text-xl mb-6 max-w-xl">
										{assignment.description}
									</p>
									<Link
										to="/assignments"
										className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
									>
										{assignment.cta}
									</Link>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Banner;

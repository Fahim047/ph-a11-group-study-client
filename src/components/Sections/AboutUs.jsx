// AboutUs.jsx

import { Lightbulb, PenTool, Users } from 'lucide-react';

const AboutUs = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
				<div className="grid md:grid-cols-3 gap-12">
					<div className="flex flex-col items-center text-center">
						<Users className="text-5xl text-blue-500 mb-4" />
						<h3 className="text-xl font-semibold mb-2">Our Mission</h3>
						<p className="text-gray-600 dark:text-white/70">
							We aim to create a collaborative environment where students can
							learn together, share ideas, and complete assignments while
							building lasting relationships.
						</p>
					</div>

					<div className="flex flex-col items-center text-center">
						<PenTool className="text-5xl text-green-500 mb-4" />
						<h3 className="text-xl font-semibold mb-2">Our Vision</h3>
						<p className="text-gray-600 dark:text-white/70">
							Our vision is to make group learning accessible and efficient, by
							providing a platform where students can create, collaborate, and
							grade assignments in a seamless, user-friendly environment.
						</p>
					</div>

					<div className="flex flex-col items-center text-center">
						<Lightbulb className="text-5xl text-yellow-500 mb-4" />
						<h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
						<p className="text-gray-600 dark:text-white/70">
							We offer a unique combination of features that foster teamwork,
							provide intuitive tools for assignment management, and make it
							easier to give and receive feedback.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;

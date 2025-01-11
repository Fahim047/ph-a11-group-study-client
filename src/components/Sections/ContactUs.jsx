// ContactUs.jsx

import { Mail, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
				<div className="grid md:grid-cols-2 gap-12">
					<div className="dark:bg-gray-700 p-8 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
						<p className="mb-6">
							Have any questions or feedback? We're here to help! Feel free to
							reach out to us using the contact details below.
						</p>

						<form className="space-y-4">
							<div>
								<label htmlFor="name" className="block mb-2">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									className="bg-transparent w-full p-3 border border-gray-300 rounded-md"
									placeholder="Your Name"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="bg-transparent w-full p-3 border border-gray-300 rounded-md"
									placeholder="Your Email"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block mb-2">
									Message
								</label>
								<textarea
									id="message"
									className="bg-transparent w-full p-3 border border-gray-300 rounded-md"
									rows="5"
									placeholder="Your Message"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500"
							>
								Send Message
							</button>
						</form>
					</div>

					<div className="space-y-8">
						<h3 className="text-xl font-semibold">Contact Information</h3>
						<div className="flex items-center">
							<Phone className="text-2xl mr-4" />
							<span>+8801521578288</span>
						</div>
						<div className="flex items-center">
							<Mail className="text-2xl mr-4" />
							<span>support@groupstudy.com</span>
						</div>
						<div className="flex items-center">
							<MapPin className="text-2xl mr-4" />
							<span>Dhaka, Bangladesh</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;

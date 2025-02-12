import { Mail, MapPin, Phone } from 'lucide-react';
import Illustration from '../assets/undraw_contact-us.svg';
import ContactForm from '../components/Forms/ContactForm';
const ContactPage = () => {
	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
				<p className="mb-12 text-center px-8">
					Have any questions or feedback? We&apos;re here to help! Feel free to
					reach out to us using the contact details below.
				</p>
				<div className="grid md:grid-cols-2 gap-12">
					<div className="dark:bg-gray-700 p-8 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

						<ContactForm />
					</div>

					<div className="space-y-8">
						<img src={Illustration} alt="contact illustration" />
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

export default ContactPage;

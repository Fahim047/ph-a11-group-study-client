import ContactForm from '../Forms/ContactForm';

const ContactUs = () => {
	return (
		<section className="py-16">
			<div className="max-w-4xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
				<div className="dark:bg-gray-700 p-8 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default ContactUs;

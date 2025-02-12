const ContactForm = () => {
	return (
		<form className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-2 text-secondary">
					Full Name
				</label>
				<input
					type="text"
					id="name"
					className="bg-transparent w-full p-3 border border-secondary rounded-md focus:outline-none focus:ring-2"
					placeholder="Enter your name"
				/>
			</div>

			<div>
				<label htmlFor="email" className="block mb-2 text-secondary">
					Email
				</label>
				<input
					type="email"
					id="email"
					className="bg-transparent w-full p-3 border border-secondary rounded-md focus:outline-none focus:ring-2"
					placeholder="Enter your email address"
				/>
			</div>

			<div>
				<label htmlFor="message" className="block mb-2 text-secondary">
					Message
				</label>
				<textarea
					id="message"
					className="bg-transparent w-full p-3 border border-secondary  rounded-md focus:outline-none focus:ring-2 resize-none"
					rows="5"
					placeholder="Write your message here..."
				></textarea>
			</div>

			<button
				type="submit"
				className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500"
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactForm;

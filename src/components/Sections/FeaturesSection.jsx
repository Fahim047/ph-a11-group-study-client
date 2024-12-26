const FeaturesSection = () => {
	const features = [
		{
			icon: '📑',
			title: 'Assignment Management',
			description:
				'Easily manage assignments with a seamless interface for creating, submitting, and reviewing tasks.',
		},
		{
			icon: '🔍',
			title: 'Submission Tracking',
			description:
				'Track the progress of submissions, including statuses, marks, and feedback, all in one place.',
		},
		{
			icon: '📝',
			title: 'Review Submissions',
			description:
				'Review and provide feedback on assignment submissions, ensuring quality and accuracy.',
		},
		{
			icon: '💬',
			title: 'Feedback System',
			description:
				'Provide and receive detailed feedback for each assignment to improve performance and outcomes.',
		},
		// {
		// 	icon: '📊',
		// 	title: 'Analytics Dashboard',
		// 	description:
		// 		'Get valuable insights into performance trends with our user-friendly analytics dashboard.',
		// },
		{
			icon: '🔒',
			title: 'Secure Access',
			description:
				'Your data is protected with robust security protocols for worry-free usage.',
		},
	];

	return (
		<section>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">Why StudyMate?</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center border-blue-600 border"
						>
							<div className="text-5xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
							<p className="text-gray-600 dark:text-white">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;

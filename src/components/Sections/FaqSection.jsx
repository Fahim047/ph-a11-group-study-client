import { useState } from 'react';

const FaqSection = () => {
	const faqs = [
		{
			question: 'What is this application about?',
			answer:
				'This application allows users to create, submit, review assignments, provide feedback, and track progress efficiently.',
		},
		{
			question: 'How do I submit an assignment?',
			answer:
				'You can submit an assignment by clicking the "Take Assignment" button on the assignment details page.',
		},
		{
			question: 'How do I review and provide feedback on an assignment?',
			answer:
				'You can review and give feedback on an assignment by clicking the "Give Marks" button on the all pending submissions page.',
		},
		{
			question: 'How do I track my progress?',
			answer:
				'You can track your progress by viewing your submitted assignments and their statuses.',
		},
		{
			question: 'Is my data secure?',
			answer:
				'Yes, we implement robust security measures to ensure your data is safe.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFaq = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="py-16">
			<div className="container mx-auto max-w-4xl px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Frequently Asked Questions
				</h2>
				<div className="space-y-2">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="dark:bg-gray-700 rounded-lg p-4 shadow-md cursor-pointer"
							onClick={() => toggleFaq(index)}
						>
							<h3 className="flex justify-between items-center text-lg font-bold">
								{faq.question}
								<span>{activeIndex === index ? '−' : '+'}</span>
							</h3>
							{activeIndex === index && (
								<p className="mt-2 dark:text-gray-300">{faq.answer}</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FaqSection;

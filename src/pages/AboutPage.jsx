import { Link } from 'react-router-dom';

export default function AboutPage() {
	return (
		<div className="min-h-screen flex items-center justify-center py-12">
			<div className="max-w-4xl mx-auto rounded-3xl flex flex-col items-center text-center">
				<h1 className="text-4xl font-extrabold text-primary mb-4">About Us</h1>
				<p className="mb-6 text-secondary">
					StudyMate is a collaborative platform designed for students to study
					together, create assignments, take tests, and evaluate each
					other&apos;s work.
				</p>
				<img
					src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Study Group"
					className="w-full rounded-xl mb-6 shadow-md"
				/>
				<div className="mt-8 w-full text-left">
					<h2 className="text-2xl font-semibold text-primary-light">
						Our Mission
					</h2>
					<p className="mt-2">
						We aim to enhance student collaboration through seamless group
						study, interactive assignments, and a structured peer evaluation
						system.
					</p>
				</div>

				<div className="mt-6 w-full text-left">
					<h2 className="text-2xl font-semibold text-primary-light">
						Why Choose StudyMate?
					</h2>
					<ul className="mt-2 space-y-3 list-disc pl-5">
						<li>
							<span className="font-medium">Seamless Collaboration:</span>{' '}
							Collaborate with your classmates or others and study together.
						</li>
						<li>
							<span className="font-medium">Interactive Assignments:</span>{' '}
							Create and take quizzes, tests, and challenges.
						</li>
						<li>
							<span className="font-medium">Peer Evaluation:</span> Learn by
							reviewing and receiving feedback on assignments.
						</li>
					</ul>
				</div>

				<div className="p-6 rounded-xl mt-10 text-center">
					<h2 className="text-2xl font-semibold text-primary-light">
						Join Us!
					</h2>
					<p className="mt-2">
						Be part of a growing student community that believes in teamwork and
						shared learning.
					</p>
					<Link
						to="/login"
						className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-2xl shadow-lg hover:bg-blue-700 transition"
					>
						Get Started
					</Link>
				</div>
			</div>
		</div>
	);
}

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TakeAssignmentModal from '../components/Assignments/TakeAssignmentModal';

const AssignmentDetailsPage = () => {
	const location = useLocation();
	const { state: assignment } = location;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => setIsModalOpen(true);
	const handleModalClose = () => setIsModalOpen(false);

	const handleSubmit = async (formData) => {
		console.log('Submitting:', formData);
		setIsModalOpen(false);
	};

	return (
		<section className="container mx-auto mt-12 px-4">
			<div className="max-w-4xl p-6 mx-auto bg-blue-100 rounded-lg shadow-lg">
				{/* Assignment Thumbnail */}
				{assignment?.thumbnail && (
					<div className="mb-6">
						<img
							src={assignment.thumbnail}
							alt={`${assignment.title} thumbnail`}
							className="w-full h-60 object-cover rounded-md"
						/>
					</div>
				)}

				{/* Assignment Title */}
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					{assignment?.title}
				</h1>

				{/* Assignment Details */}
				<div className="text-gray-700 text-lg space-y-4 mb-6">
					<p>{assignment?.description}</p>
					<div className="flex items-center gap-4">
						<span className="text-sm font-semibold text-gray-600">
							<strong>Marks:</strong> {assignment?.marks}
						</span>
						<span
							className={`text-sm font-semibold px-3 py-1 rounded-full ${
								assignment?.difficulty === 'easy'
									? 'bg-green-100 text-green-600'
									: assignment?.difficulty === 'medium'
									? 'bg-yellow-100 text-yellow-600'
									: 'bg-red-100 text-red-600'
							}`}
						>
							{assignment?.difficulty.charAt(0).toUpperCase() +
								assignment?.difficulty.slice(1)}
						</span>
					</div>
					<p>
						<strong>Due Date:</strong>{' '}
						{new Date(assignment?.dueDate).toLocaleDateString()}
					</p>
				</div>

				{/* Action Button */}
				<div className="text-right">
					<button
						onClick={handleModalOpen}
						className="inline-block bg-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
					>
						Take Assignment
					</button>
				</div>

				{/* Modal */}
				{isModalOpen && (
					<TakeAssignmentModal
						assignment={assignment}
						onSubmit={handleSubmit}
						onClose={handleModalClose}
					/>
				)}
			</div>
		</section>
	);
};

export default AssignmentDetailsPage;

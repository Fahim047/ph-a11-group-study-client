import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TakeAssignmentModal from '../components/Assignments/TakeAssignmentModal';
import { useAuth } from '../hooks';

const AssignmentDetailsPage = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const { state: assignment } = location;
	console.log(assignment);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const difficultyStyle = {
		easy: 'bg-green-100 text-green-600',
		medium: 'bg-yellow-100 text-yellow-600',
		hard: 'bg-red-100 text-red-600',
	};

	const handleModalOpen = () => {
		if (!user) {
			toast.error('You must be logged in to take an assignment');
			navigate('/login');
			return;
		}
		setIsModalOpen(true);
	};
	const handleModalClose = () => setIsModalOpen(false);

	const handleSubmit = async (formData) => {
		console.log('Submitting:', formData);
		setIsModalOpen(false);
	};

	return (
		<section className="container mx-auto mt-12 px-4">
			<div className="max-w-4xl p-6 mx-auto bg-blue-100 rounded-lg shadow-lg">
				{/* Assignment Thumbnail */}
				{assignment?.imageURL && (
					<div className="mb-6">
						<img
							src={assignment.imageURL}
							alt={`${assignment.title} imageURL`}
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
							className={`text-sm font-semibold px-3 py-1 rounded-full capitalize ${
								assignment?.difficulty && difficultyStyle[assignment.difficulty]
							}`}
						>
							{assignment?.difficulty}
						</span>
					</div>
					<p>
						<strong>Deadline:</strong>{' '}
						{new Date(assignment?.deadline).toLocaleDateString()}
					</p>
				</div>

				{/* Action Button */}
				<div className="text-right">
					<button
						onClick={handleModalOpen}
						disabled={user?.email === assignment?.author?.email}
						className={`inline-block bg-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition ${
							user?.email === assignment?.author?.email
								? 'opacity-80 cursor-not-allowed'
								: ''
						}`}
					>
						{user?.email === assignment?.author?.email
							? "You can't take your own assignment"
							: 'Take Assignment'}
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

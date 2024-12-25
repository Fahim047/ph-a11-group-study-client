import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AssignmentCard = ({
	assignment,
	currentUserEmail,
	onDelete,
	onUpdate,
}) => {
	const navigate = useNavigate();
	const difficultyStyle = {
		easy: 'bg-green-100 text-green-600',
		medium: 'bg-yellow-100 text-yellow-600',
		hard: 'bg-red-100 text-red-600',
	};

	const handleDelete = () => {
		if (assignment?.author?.email !== currentUserEmail) {
			toast.error('You can only delete assignments you created.');
			return;
		}

		const confirmed = window.confirm(
			'Are you sure you want to delete this assignment?'
		);
		if (confirmed) {
			onDelete(assignment.id);
			toast.success('Assignment deleted successfully.');
		}
	};

	const handleUpdate = () => {
		if (assignment.author?.email !== currentUserEmail) {
			toast.error('You can only update assignments you created.');
			return;
		}

		onUpdate(assignment);
	};

	const handleView = () => {
		navigate(`/assignment/${assignment.id}`, { state: assignment });
	};

	return (
		<div className="p-4 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-blue-400 rounded-md">
			<div className="relative">
				<img
					className="h-48 w-full object-cover"
					src={assignment.imageURL || 'https://via.placeholder.com/300'}
					alt={assignment.title}
				/>
				<span
					className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
						assignment?.difficulty && difficultyStyle[assignment.difficulty]
					}`}
				>
					{assignment.difficulty}
				</span>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-semibold text-blue-200">
					{assignment.title}
				</h3>
				<p className="text-sm mt-1">
					Marks: <span className="font-medium">{assignment.description}</span>
				</p>
				<p className="text-sm mt-1">
					Marks: <span className="font-medium">{assignment.marks}</span>
				</p>
				<div className="mt-4 flex items-center justify-end space-x-2">
					<button
						onClick={handleView}
						className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
					>
						View
					</button>
					<button
						onClick={handleUpdate}
						className=" bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
					>
						Update
					</button>
					<button
						onClick={handleDelete}
						className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default AssignmentCard;

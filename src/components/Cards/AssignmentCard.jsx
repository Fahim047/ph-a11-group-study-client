import { MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AssignmentCard = ({
	assignment,
	currentUserEmail,
	onDelete,
	onUpdate,
}) => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	const difficultyStyle = {
		easy: 'bg-green-100 text-green-600',
		medium: 'bg-yellow-100 text-yellow-600',
		hard: 'bg-red-100 text-red-600',
	};

	const handleDelete = async () => {
		if (assignment?.author?.email !== currentUserEmail) {
			toast.error('You can only delete assignments you created.');
			return;
		}
		const result = await Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: 'red',
			cancelButtonColor: 'gray',
			confirmButtonText: 'Delete',
		});
		if (result.isConfirmed) {
			onDelete(assignment.id);
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
		<div className="p-4 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-secondary-dark rounded-md relative">
			<div className="relative mb-4">
				<img
					className="h-48 w-full object-cover rounded-md"
					src={assignment.imageURL || 'https://via.placeholder.com/300'}
					alt={assignment.title}
				/>
				<span
					className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full capitalize ${
						assignment?.difficulty && difficultyStyle[assignment.difficulty]
					}`}
				>
					{assignment.difficulty}
				</span>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="absolute top-3 right-3 p-2 text-white rounded-full shadow-md"
				>
					<MoreVertical size={18} />
				</button>
				{menuOpen && (
					<div className="absolute top-10 right-3 bg-white dark:bg-gray-800 shadow-lg rounded-md w-32 text-sm">
						<button
							onClick={handleUpdate}
							className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
						>
							Update
						</button>
						<button
							onClick={handleDelete}
							className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-md"
						>
							Delete
						</button>
					</div>
				)}
			</div>
			<h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
			<p className="text-sm mt-1 text-secondary">
				Marks: <span className="font-medium">{assignment.marks}</span>
			</p>
			<div className="flex justify-end">
				<button
					onClick={handleView}
					className="block w-fit text-left px-4 py-2 bg-primary-light hover:bg-opacity-80 rounded-md"
				>
					Details
				</button>
			</div>
		</div>
	);
};

export default AssignmentCard;

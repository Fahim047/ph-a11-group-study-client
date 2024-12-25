import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AssignmentCard from '../components/Cards/AssignmentCard';
import { useAuth } from '../hooks';

const AssignmentsPage = () => {
	const { user } = useAuth();
	const [assignments, setAssignments] = useState([]);

	const fetchAssignments = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/assignments`
			);
			if (!response.ok) {
				throw new Error('Failed to fetch assignments.');
			}
			const data = await response.json();
			setAssignments(data);
		} catch (err) {
			console.error(err);
			toast.error(err.message);
		}
	};

	useEffect(() => {
		fetchAssignments();
	}, []);

	const deleteAssignment = async (id) => {
		setAssignments(assignments.filter((assignment) => assignment.id !== id));
	};

	const updateAssignment = (assignment) => {
		console.log('Update Assignment:', assignment);
		toast.info('Redirect to update form!');
	};

	return (
		<section className="container mx-auto px-4 mt-12 ">
			<h2 className="text-3xl font-bold mb-4">Assignments</h2>
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
				{assignments.map((assignment) => (
					<AssignmentCard
						key={assignment.id}
						assignment={assignment}
						currentUserEmail={user?.email}
						onDelete={deleteAssignment}
						onUpdate={updateAssignment}
					/>
				))}
			</div>
		</section>
	);
};

export default AssignmentsPage;

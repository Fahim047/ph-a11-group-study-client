import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AssignmentCard from '../components/Cards/AssignmentCard';
import { useAuth } from '../hooks';

const AssignmentsPage = () => {
	const { user } = useAuth();
	const [assignments, setAssignments] = useState([]);

	useEffect(() => {
		fetchAssignments();
	}, []);

	const fetchAssignments = async () => {
		const mockData = [
			{
				id: 1,
				title: 'React Basics',
				description: 'react assignment',
				marks: 10,
				difficulty: 'easy',
				thumbnail: 'https://via.placeholder.com/150',
				creatorEmail: user?.email || 'creator@example.com',
			},
			{
				id: 2,
				title: 'React Basics',
				description: 'react assignment',
				marks: 10,
				difficulty: 'easy',
				thumbnail: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',
				creatorEmail: user?.email || 'creator@example.com',
			},
		];
		setAssignments(mockData);
	};

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

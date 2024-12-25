import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import AssignmentCard from '../components/Cards/AssignmentCard';
import Loader from '../components/Loader/Loader';
import { useAuth } from '../hooks';
import { fetchAllAssignments } from '../utils/queries';

const AssignmentsPage = () => {
	const { user } = useAuth();
	const { data: assignments, isPending } = useQuery({
		queryKey: ['assignments'],
		queryFn: fetchAllAssignments,
	});

	const deleteAssignment = async (id) => {
		console.log('Deleting assignment with ID:', id);
	};

	const updateAssignment = (assignment) => {
		console.log('Update Assignment:', assignment);
		toast.info('Redirect to update form!');
	};
	if (isPending) {
		return <Loader />;
	}
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

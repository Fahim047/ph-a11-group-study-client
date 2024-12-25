import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import AssignmentCard from '../components/Cards/AssignmentCard';
import AssignmentForm from '../components/Forms/AssignmentForm';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import { useAuth } from '../hooks';
import { fetchAllAssignments } from '../utils/queries';

const AssignmentsPage = () => {
	const { user } = useAuth();
	const { data: assignments = [], isLoading } = useQuery({
		queryKey: ['assignments'],
		queryFn: fetchAllAssignments,
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentAssignment, setCurrentAssignment] = useState(null);

	const handleUpdateAssignment = async (updatedData) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/assignments/${
					currentAssignment.id
				}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(updatedData),
				}
			);
			if (!response.ok) {
				throw new Error('Failed to update assignment.');
			}
			console.log('Updated Data:', updatedData);
			toast.success('Assignment updated successfully!');
			setIsModalOpen(false);
		} catch (err) {
			console.error('Update failed:', err);
			toast.error('Failed to update assignment.');
		}
	};

	const openUpdateModal = (assignment) => {
		setCurrentAssignment(assignment);
		setIsModalOpen(true);
	};

	const handleDeleteAssignment = async (id) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/assignments/${id}`,
				{
					method: 'DELETE',
				}
			);
			if (!response.ok) {
				throw new Error('Failed to delete assignment.');
			}
			toast.success('Assignment deleted successfully!');
		} catch (err) {
			console.error('Delete failed:', err);
			toast.error('Failed to delete assignment.');
		}
		if (isLoading) {
			return <Loader />;
		}
	};
	return (
		<section className="container mx-auto px-4 mt-12">
			<h2 className="text-3xl font-bold mb-4">Assignments</h2>
			<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
				{assignments.map((assignment) => (
					<AssignmentCard
						key={assignment.id}
						assignment={assignment}
						currentUserEmail={user?.email}
						onDelete={handleDeleteAssignment}
						onUpdate={() => openUpdateModal(assignment)}
					/>
				))}
			</div>

			{/* Update Modal */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<AssignmentForm
					onSubmit={handleUpdateAssignment}
					assignment={currentAssignment}
					mode="update"
				/>
			</Modal>
		</section>
	);
};

export default AssignmentsPage;

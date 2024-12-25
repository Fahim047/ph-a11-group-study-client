import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import AssignmentForm from '../components/Forms/AssignmentForm';
import { useAuth } from '../hooks';

const CreateAssignmentPage = () => {
	const { user } = useAuth(); // Ensure the user is authenticated
	const [isLoading, setIsLoading] = useState(false);

	const handleCreateAssignment = async (assignmentData) => {
		if (!user) return;
		setIsLoading(true);

		try {
			// Add author details to the assignment
			assignmentData.author = {
				name: user?.displayName,
				email: user?.email,
				photoURL: user?.photoURL,
			};

			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/assignments`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(assignmentData),
				}
			);

			if (!response.ok) {
				throw new Error('Failed to create assignment. Please try again.');
			}

			const data = await response.json();
			console.log('Assignment Created:', data);
			toast.success('Assignment created successfully!');
		} catch (err) {
			toast.error(err.message);
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-blue-100 flex items-center justify-center py-12 px-6 sm:px-8">
			<div className="max-w-lg bg-white w-full rounded-lg shadow-md p-6">
				{/* Pass down the create mode */}
				<AssignmentForm
					mode="create"
					onSubmit={handleCreateAssignment}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};

export default CreateAssignmentPage;

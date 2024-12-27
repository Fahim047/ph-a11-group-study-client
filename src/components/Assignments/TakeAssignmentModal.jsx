import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks';
import { createSubmission } from '../../utils/api-utils';

const TakeAssignmentModal = ({ assignment, onClose }) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	// Local state for form inputs
	const [googleDocsLink, setGoogleDocsLink] = useState('');
	const [note, setNote] = useState('');

	const { mutate: submitAssignment, isLoading: isSubmitting } = useMutation({
		mutationFn: createSubmission,
		onSuccess: () => {
			toast.success('Assignment submitted successfully!');
			queryClient.invalidateQueries(['assignments']);
			onClose();
		},
		onError: (error) => {
			toast.error(`Failed to submit the assignment: ${error.message}`);
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!user) {
			toast.error('You must be logged in to submit an assignment.');
			navigate('/login');
			return;
		}

		if (!googleDocsLink.trim()) {
			toast.error('Please provide a valid Google Docs link.');
			return;
		}

		// Call the mutation
		submitAssignment({
			assignmentId: assignment.id,
			userEmail: user?.email,
			googleDocsLink,
			note,
		});
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-11/12 max-w-lg p-6">
				<h2 className="text-2xl font-semibold text-gray-900mb-4">
					Submit Assignment: {assignment.title}
				</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="googleDocsLink"
							className="block text-sm font-medium"
						>
							Google Docs Link
						</label>
						<input
							type="url"
							id="googleDocsLink"
							value={googleDocsLink}
							onChange={(e) => setGoogleDocsLink(e.target.value)}
							required
							className="bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter Google Docs link"
						/>
					</div>
					<div>
						<label
							htmlFor="note"
							className="block text-sm font-medium text-gray-700"
						>
							Quick Note
						</label>
						<textarea
							id="note"
							rows={4}
							value={note}
							onChange={(e) => setNote(e.target.value)}
							className="bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Add a quick note (optional)"
						/>
					</div>
					<div className="flex justify-end space-x-3">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md"
						>
							Cancel
						</button>
						<button
							type="submit"
							disabled={isSubmitting}
							className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md disabled:opacity-50"
						>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TakeAssignmentModal;

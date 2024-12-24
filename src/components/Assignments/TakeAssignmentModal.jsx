import { useState } from 'react';
import { toast } from 'react-toastify';

const TakeAssignmentModal = ({ assignment, onSubmit, onClose }) => {
	const [googleDocsLink, setGoogleDocsLink] = useState('');
	const [quickNote, setQuickNote] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!googleDocsLink.trim()) {
			toast.error('Please provide a valid Google Docs link.');
			return;
		}

		setIsSubmitting(true);
		try {
			await onSubmit({
				assignmentId: assignment.id,
				googleDocsLink,
				quickNote,
				status: 'pending',
			});
			toast.success('Assignment submitted successfully!');
			setGoogleDocsLink('');
			setQuickNote('');
		} catch (error) {
			toast.error('Failed to submit the assignment. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Submit Assignment: {assignment.title}
				</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="googleDocsLink"
							className="block text-sm font-medium text-gray-700"
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
							htmlFor="quickNote"
							className="block text-sm font-medium text-gray-700"
						>
							Quick Note
						</label>
						<textarea
							id="quickNote"
							rows={4}
							value={quickNote}
							onChange={(e) => setQuickNote(e.target.value)}
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

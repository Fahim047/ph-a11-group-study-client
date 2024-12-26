import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { updateSubmissionMarks } from '../../utils/api-utils';

const GiveMarksModal = ({ submission, onClose }) => {
	const [obtainedMarks, setObtainedMarks] = useState('');
	const [feedback, setFeedback] = useState('');
	const queryClient = useQueryClient();

	const { mutate: giveMark, isLoading: isSubmitting } = useMutation({
		mutationFn: updateSubmissionMarks,
		onSuccess: () => {
			toast.success('Marks updated successfully!');
			queryClient.invalidateQueries(['pendingSubmissions']);
			onClose();
		},
		onError: (error) => {
			toast.error(error.response?.data?.message || 'Failed to update marks.');
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!obtainedMarks) {
			toast.error('Please enter obtained marks.');
			return;
		}

		giveMark({
			submissionId: submission.id,
			obtainedMarks,
			feedback,
		});
	};

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[999] overflow-y-auto">
			<div className="max-w-xl bg-gray-800 p-6 rounded shadow-md">
				<h3 className="text-xl font-bold mb-4 text-blue-400">
					Mark Assignment
				</h3>
				<p className="mb-2">
					<strong>Title:</strong> {submission.assignmentId?.title}
				</p>
				<p className="mb-2">
					<strong>Examinee:</strong> {submission.userEmail}
				</p>
				<p className="mb-4">
					<a
						href={submission.googleDocsLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 underline"
					>
						View Google Docs
					</a>
				</p>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block mb-2 font-bold">Marks</label>
						<input
							type="number"
							name="obtainedMarks"
							value={obtainedMarks}
							onChange={(e) => setObtainedMarks(e.target.value)}
							className="bg-transparent w-full border border-gray-300 rounded px-3 py-2"
							placeholder="Enter marks"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block mb-2 font-bold">Feedback</label>
						<textarea
							name="feedback"
							value={feedback}
							onChange={(e) => setFeedback(e.target.value)}
							className="bg-transparent w-full border border-gray-300 rounded px-3 py-2"
							placeholder="Enter feedback (optional)"
						></textarea>
					</div>
					<div className="flex justify-end">
						<button
							type="button"
							className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
							onClick={onClose}
						>
							Cancel
						</button>
						<button
							type="submit"
							disabled={isSubmitting}
							className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
						>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default GiveMarksModal;

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import GiveMarksModal from '../components/Assignments/GiveMarksModal';
import { fetchAllPendingSubmissions } from '../utils/api-utils';

const PendingAssignments = () => {
	const { data: pendingSubmissions, isPending } = useQuery({
		queryKey: ['pendingSubmissions'],
		queryFn: fetchAllPendingSubmissions,
	});

	const [selectedSubmission, setSelectedSubmission] = useState(null);

	const handleGiveMark = (submission) => {
		setSelectedSubmission(submission);
	};

	const closeModal = () => {
		setSelectedSubmission(null);
	};

	if (isPending) return <div>Loading...</div>;

	return (
		<div className="p-6 font-sans">
			<h2 className="text-center text-2xl font-bold mb-4">
				Pending Submissions of Assignments
			</h2>
			<div className="overflow-x-auto">
				<table className="table-auto w-full border-collapse border border-gray-200">
					<thead>
						<tr className="bg-blue-400 text-white">
							<th className="border border-gray-300 px-4 py-2 text-left">
								Title
							</th>
							<th className="border border-gray-300 px-4 py-2 text-left">
								Total Marks
							</th>
							<th className="border border-gray-300 px-4 py-2 text-left">
								Examinee Name
							</th>
							<th className="border border-gray-300 px-4 py-2 text-left">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{pendingSubmissions.map((submission) => (
							<tr key={submission.assignmentId?._id}>
								<td className="border border-gray-300 px-4 py-2">
									{submission.assignmentId?.title}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{submission.assignmentId?.marks}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{submission.userEmail}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									<button
										className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
										onClick={() => handleGiveMark(submission)}
									>
										Give Mark
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{selectedSubmission && (
				<GiveMarksModal submission={selectedSubmission} onClose={closeModal} />
			)}
		</div>
	);
};

export default PendingAssignments;

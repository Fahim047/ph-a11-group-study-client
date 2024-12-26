// MySubmissionsPage.js (or your respective component)
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../hooks';
import { fetchSubmissions } from '../utils/api-utils';

const MySubmissionsPage = () => {
	const { user } = useAuth();
	const userEmail = user?.email;
	const {
		data: submissions,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ['submissions', userEmail],
		queryFn: () => fetchSubmissions(userEmail),
	});

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>Error: {error.message}</div>;

	return (
		<div className="container mx-auto px-4">
			<h2 className="text-center text-3xl font-bold my-8">
				My Submitted Assignments
			</h2>
			<div className="overflow-x-auto">
				<table className="table-auto w-full border-collapse border border-blue-200">
					<thead>
						<tr className="bg-blue-500 text-white">
							<th className="border border-blue-200 px-4 py-2 text-left">
								Title
							</th>
							<th className="border border-blue-200 px-4 py-2 text-left">
								Status
							</th>
							<th className="border border-blue-200 px-4 py-2 text-left">
								Total Marks
							</th>
							<th className="border border-blue-200 px-4 py-2 text-left">
								Obtained Marks
							</th>
							<th className="border border-blue-200 px-4 py-2 text-left">
								Feedback
							</th>
						</tr>
					</thead>
					<tbody>
						{submissions.length === 0 ? (
							<tr>
								<td colSpan="5" className="text-center py-4">
									No submissions found.
								</td>
							</tr>
						) : (
							submissions.map((submission) => (
								<tr key={submission.id}>
									<td className="border border-blue-300 px-4 py-2">
										{submission.assignmentId.title}
									</td>
									<td className="border border-blue-300 px-4 py-2">
										{submission.status}
									</td>
									<td className="border border-blue-300 px-4 py-2">
										{submission.assignmentId.marks}
									</td>
									<td className="border border-blue-300 px-4 py-2">
										{submission.obtainedMarks !== null
											? submission.obtainedMarks
											: '-'}
									</td>
									<td className="border border-blue-300 px-4 py-2">
										{submission.feedback || 'No feedback yet'}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MySubmissionsPage;

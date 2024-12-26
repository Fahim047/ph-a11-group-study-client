import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchAllPendingAssignments } from '../utils/queries';

// Mock data for pending assignments
const mockPendingAssignments = [
	{
		id: 1,
		title: 'Pending Assignment 1',
		totalMarks: 100,
		examineeName: 'John Doe',
		googleDocsLink: 'https://docs.google.com/sample1',
		notes: 'Please evaluate the attached document.',
	},
	{
		id: 2,
		title: 'Pending Assignment 2',
		totalMarks: 50,
		examineeName: 'Jane Smith',
		googleDocsLink: 'https://docs.google.com/sample2',
		notes: 'Kindly review my submission.',
	},
];

const PendingAssignments = () => {
	const { data: pendingAssignments } = useQuery({
		queryKey: ['pendingAssignments'],
		queryFn: fetchAllPendingAssignments,
	});
	const [selectedAssignment, setSelectedAssignment] = useState(null);

	const handleGiveMark = (assignment) => {
		setSelectedAssignment(assignment);
	};

	const closeModal = () => {
		setSelectedAssignment(null);
	};

	return (
		<div className="p-6 font-sans">
			<h2 className="text-center text-2xl font-bold mb-4">
				Pending Assignments
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
						{mockPendingAssignments.map((assignment) => (
							<tr key={assignment.id}>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.title}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.totalMarks}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									{assignment.examineeName}
								</td>
								<td className="border border-gray-300 px-4 py-2">
									<button
										className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
										onClick={() => handleGiveMark(assignment)}
									>
										Give Mark
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{selectedAssignment && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[999] overflow-y-auto">
					<div className="max-w-xl bg-gray-800 p-6 rounded shadow-md">
						<h3 className="text-xl font-bold mb-4 text-blue-400">
							Mark Assignment
						</h3>
						<p className="mb-2">
							<strong>Title:</strong> {selectedAssignment.title}
						</p>
						<p className="mb-2">
							<strong>Examinee:</strong> {selectedAssignment.examineeName}
						</p>
						<p className="mb-4">
							<a
								href={selectedAssignment.googleDocsLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								View Google Docs
							</a>
						</p>
						<p className="mb-4">
							<strong>Notes:</strong> {selectedAssignment.notes}
						</p>
						<form>
							<div className="mb-4">
								<label className="block mb-2 font-bold">Marks</label>
								<input
									type="number"
									className="bg-transparent w-full border border-gray-300 rounded px-3 py-2"
									placeholder="Enter marks"
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 font-bold">Feedback</label>
								<textarea
									className="bg-transparent w-full border border-gray-300 rounded px-3 py-2"
									placeholder="Enter feedback"
								></textarea>
							</div>
							<div className="flex justify-end">
								<button
									type="button"
									className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
									onClick={closeModal}
								>
									Cancel
								</button>
								<button
									type="submit"
									className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default PendingAssignments;

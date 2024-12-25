// Importing necessary dependencies
import React from 'react';

// Mock data for submitted assignments
const mockAssignments = [
	{
		id: 1,
		title: 'Assignment 1',
		status: 'Submitted',
		totalMarks: 100,
		obtainedMarks: 90,
		feedback: 'Great work!',
	},
	{
		id: 2,
		title: 'Assignment 2',
		status: 'Submitted',
		totalMarks: 50,
		obtainedMarks: 45,
		feedback: 'Well done!',
	},
	{
		id: 3,
		title: 'Assignment 3',
		status: 'Pending Review',
		totalMarks: 75,
		obtainedMarks: null,
		feedback: null,
	},
];

// Functional Component
const MyAssignmentsPage = () => {
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
						{mockAssignments.map((assignment) => (
							<tr key={assignment.id} className="">
								<td className="border border-blue-300 px-4 py-2">
									{assignment.title}
								</td>
								<td className="border border-blue-300 px-4 py-2">
									{assignment.status}
								</td>
								<td className="border border-blue-300 px-4 py-2">
									{assignment.totalMarks}
								</td>
								<td className="border border-blue-300 px-4 py-2">
									{assignment.obtainedMarks !== null
										? assignment.obtainedMarks
										: '-'}
								</td>
								<td className="border border-blue-300 px-4 py-2">
									{assignment.feedback || 'No feedback yet'}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyAssignmentsPage;

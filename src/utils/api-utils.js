import axios from 'axios';

export const createSubmission = async (submissionData) => {
	const response = await axios.post(
		`${import.meta.env.VITE_API_BASE_URL}/submissions`,
		submissionData
	);
	return response.data;
};
export const fetchAllPendingSubmissions = async () => {
	const response = await axios.get(
		`${import.meta.env.VITE_API_BASE_URL}/submissions/pending`
	);
	return response.data;
};
export const updateSubmissionMarks = async ({
	submissionId,
	obtainedMarks,
	feedback,
}) => {
	console.log(
		'Updating submission marks:',
		submissionId,
		obtainedMarks,
		feedback
	);
	const response = await axios.put(
		`${import.meta.env.VITE_API_BASE_URL}/submissions/${submissionId}`,
		{ obtainedMarks, feedback }
	);
	return response.data;
};
export const fetchSubmissions = async (userEmail) => {
	const response = await axios.get(
		`${import.meta.env.VITE_API_BASE_URL}/submissions`,
		{
			params: { userEmail },
		}
	);
	return response.data;
};

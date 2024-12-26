import axios from 'axios';

export const createSubmission = async (submissionData) => {
	const response = await axios.post(
		`${import.meta.env.VITE_API_BASE_URL}/submissions`,
		submissionData
	);
	return response.data;
};

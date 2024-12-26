import apiClient from '../axios/apiClient';

export const createSubmission = async (submissionData) => {
	try {
		const response = await apiClient.post('/submissions', submissionData);
		return response.data;
	} catch (error) {
		throw new Error('Error creating submission: ' + error.message);
	}
};

export const fetchAllPendingSubmissions = async () => {
	try {
		const response = await apiClient.get('/submissions/pending');
		return response.data;
	} catch (error) {
		throw new Error('Error fetching pending submissions: ' + error.message);
	}
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
	try {
		const response = await apiClient.put(`/submissions/${submissionId}`, {
			obtainedMarks,
			feedback,
		});
		return response.data;
	} catch (error) {
		throw new Error('Error updating submission marks: ' + error.message);
	}
};

export const fetchSubmissions = async (userEmail) => {
	try {
		const response = await apiClient.get('/submissions', {
			params: { userEmail },
		});
		return response.data;
	} catch (error) {
		throw new Error('Error fetching submissions: ' + error.message);
	}
};

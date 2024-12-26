import { toast } from 'react-toastify';
import apiClient from '../axios/apiClient';

export const fetchAllAssignments = async () => {
	try {
		const response = await apiClient.get('/assignments');
		return response.data;
	} catch (err) {
		console.error(err);
		toast.error('Failed to fetch assignments: ' + err.message);
		throw err;
	}
};

export const deleteAssignmentById = async (id) => {
	try {
		const response = await apiClient.delete(`/assignments/${id}`);
		return id;
	} catch (err) {
		console.error(err);
		toast.error('Failed to delete assignment: ' + err.message);
		throw err;
	}
};

export const fetchAllPendingAssignments = async () => {
	try {
		const response = await apiClient.get('/assignments/pending');
		return response.data;
	} catch (err) {
		console.error(err);
		toast.error('Failed to fetch pending assignments: ' + err.message);
		throw err;
	}
};

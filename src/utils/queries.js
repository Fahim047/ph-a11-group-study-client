import { toast } from 'react-toastify';

export const fetchAllAssignments = async () => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/assignments`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch assignments.');
		}
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
		toast.error(err.message);
	}
};

export const deleteAssignmentById = async (id) => {
	const response = await fetch(
		`${import.meta.env.VITE_API_BASE_URL}/assignments/${id}`,
		{ method: 'DELETE' }
	);
	if (!response.ok) throw new Error('Failed to delete assignment.');
	return id;
};

export const fetchAllPendingAssignments = async () => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/assignments/pending`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch assignments.');
		}
		const data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
		toast.error(err.message);
	}
};

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
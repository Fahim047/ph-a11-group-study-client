import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks';

const CreateAssignmentPage = () => {
	const { user } = useAuth();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [marks, setMarks] = useState('');
	const [imageURL, setImageURL] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [deadline, setDeadline] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleCreateAssignment = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		if (!user) return;
		try {
			const assignmentData = {
				title,
				description,
				marks,
				imageURL,
				difficulty,
				deadline,
				author: {
					name: user?.displayName,
					email: user?.email,
					photoURL: user?.photoURL,
				},
			};
			const response = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/api/assignments`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(assignmentData),
				}
			);
			if (!response.ok) {
				throw new Error('Failed to create assignment. Please try again.');
			}
			const data = await response.json();
			console.log('Assignment Created:', assignmentData);
			toast.success('Assignment created successfully!');
			setTitle('');
			setDescription('');
			setMarks('');
			setImageURL('');
			setDifficulty('');
			setDeadline(null);
		} catch (err) {
			toast.error(err.message);
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6 sm:px-8">
			<div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
				<h1 className="text-2xl font-bold text-center text-gray-800">
					Create Assignment
				</h1>
				<form className="mt-6 space-y-6" onSubmit={handleCreateAssignment}>
					{/* Title */}
					<div>
						<label
							htmlFor="title"
							className="block text-sm font-medium text-gray-700"
						>
							Title
						</label>
						<input
							id="title"
							name="title"
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter assignment title"
						/>
					</div>

					{/* Description */}
					<div>
						<label
							htmlFor="description"
							className="block text-sm font-medium text-gray-700"
						>
							Description
						</label>
						<textarea
							id="description"
							name="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter assignment description"
							rows="4"
						></textarea>
					</div>

					{/* Marks */}
					<div>
						<label
							htmlFor="marks"
							className="block text-sm font-medium text-gray-700"
						>
							Marks
						</label>
						<input
							id="marks"
							name="marks"
							type="number"
							value={marks}
							min={10}
							onChange={(e) => setMarks(e.target.value)}
							required
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter marks"
						/>
					</div>

					{/* imageURL URL */}
					<div>
						<label
							htmlFor="imageURL"
							className="block text-sm font-medium text-gray-700"
						>
							imageURL Image URL
						</label>
						<input
							id="imageURL"
							type="text"
							value={imageURL}
							onChange={(e) => setImageURL(e.target.value)}
							required
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter imageURL URL"
						/>
					</div>

					{/* Difficulty Level */}
					<div>
						<label
							htmlFor="difficulty"
							className="block text-sm font-medium text-gray-700"
						>
							Difficulty Level
						</label>
						<select
							id="difficulty"
							value={difficulty}
							onChange={(e) => setDifficulty(e.target.value)}
							required
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						>
							<option value="" disabled>
								Select difficulty
							</option>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</div>

					{/* Deadline */}
					<div>
						<label
							htmlFor="deadline"
							className="block text-sm font-medium text-gray-700"
						>
							Deadline
						</label>
						<DatePicker
							id="deadline"
							selected={deadline}
							onChange={(date) => setDeadline(date)}
							dateFormat="dd/MM/yyyy"
							placeholderText="Select deadline"
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							required
						/>
					</div>

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							disabled={isLoading}
							className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
						>
							{isLoading ? 'Creating...' : 'Create Assignment'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateAssignmentPage;

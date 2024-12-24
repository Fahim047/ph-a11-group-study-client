import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const CreateAssignmentPage = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [marks, setMarks] = useState('');
	const [thumbnailUrl, setThumbnailUrl] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [dueDate, setDueDate] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleCreateAssignment = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Mock function for creating an assignment
		try {
			const assignmentData = {
				title,
				description,
				marks,
				thumbnailUrl,
				difficulty,
				dueDate,
			};

			// Simulate API call
			console.log('Assignment Created:', assignmentData);

			// Success Notification
			toast.success('Assignment created successfully!');
			setTitle('');
			setDescription('');
			setMarks('');
			setThumbnailUrl('');
			setDifficulty('');
			setDueDate(null);
		} catch (error) {
			toast.error('Failed to create assignment. Please try again.');
			console.error(error);
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
							onChange={(e) => setMarks(e.target.value)}
							required
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter marks"
						/>
					</div>

					{/* Thumbnail URL */}
					<div>
						<label
							htmlFor="thumbnailUrl"
							className="block text-sm font-medium text-gray-700"
						>
							Thumbnail Image URL
						</label>
						<input
							id="thumbnailUrl"
							type="text"
							value={thumbnailUrl}
							onChange={(e) => setThumbnailUrl(e.target.value)}
							required
							className="text-gray-800 bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							placeholder="Enter thumbnail URL"
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

					{/* Due Date */}
					<div>
						<label
							htmlFor="dueDate"
							className="block text-sm font-medium text-gray-700"
						>
							Due Date
						</label>
						<DatePicker
							id="dueDate"
							selected={dueDate}
							onChange={(date) => setDueDate(date)}
							dateFormat="dd/MM/yyyy"
							placeholderText="Select due date"
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

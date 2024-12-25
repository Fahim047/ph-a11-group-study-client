import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

const AssignmentForm = ({ onSubmit, assignment = {}, mode = 'create' }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [marks, setMarks] = useState('');
	const [imageURL, setImageURL] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [deadline, setDeadline] = useState(null);

	useEffect(() => {
		if (mode === 'update' && assignment) {
			setTitle(assignment.title || '');
			setDescription(assignment.description || '');
			setMarks(assignment.marks || '');
			setImageURL(assignment.imageURL || '');
			setDifficulty(assignment.difficulty || '');
			setDeadline(assignment.deadline ? new Date(assignment.deadline) : null);
		}
	}, [mode, assignment]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			title,
			description,
			marks,
			imageURL,
			difficulty,
			deadline,
		};
		onSubmit(formData);
	};

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			<h3 className="text-xl font-bold text-center">
				{mode === 'create' ? 'Create Assignment' : 'Update Assignment'}
			</h3>

			<div>
				<label htmlFor="title" className="block text-sm font-medium">
					Title
				</label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="bg-transparent mt-1 block w-full px-3 py-2 border rounded-md"
					required
				/>
			</div>

			<div>
				<label htmlFor="description" className="block text-sm font-medium">
					Description
				</label>
				<textarea
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="bg-transparent mt-1 block w-full px-3 py-2 border rounded-md"
					rows="4"
					required
				></textarea>
			</div>

			<div>
				<label htmlFor="marks" className="block text-sm font-medium">
					Marks
				</label>
				<input
					id="marks"
					type="number"
					value={marks}
					onChange={(e) => setMarks(e.target.value)}
					className="bg-transparent mt-1 block w-full px-3 py-2 border rounded-md"
					min="10"
					required
				/>
			</div>

			<div>
				<label htmlFor="imageURL" className="block text-sm font-medium">
					Image URL
				</label>
				<input
					id="imageURL"
					type="text"
					value={imageURL}
					onChange={(e) => setImageURL(e.target.value)}
					className="bg-transparent mt-1 block w-full px-3 py-2 border rounded-md"
					required
				/>
			</div>

			<div>
				<label htmlFor="difficulty" className="block text-sm font-medium">
					Difficulty Level
				</label>
				<select
					id="difficulty"
					value={difficulty}
					onChange={(e) => setDifficulty(e.target.value)}
					className="bg-transparent mt-1 block w-full px-3 py-2 border rounded-md"
					required
				>
					<option value="" disabled>
						Select difficulty
					</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</div>

			<div>
				<label htmlFor="deadline" className="block text-sm font-medium">
					Deadline
				</label>
				<DatePicker
					id="deadline"
					selected={deadline}
					onChange={(date) => setDeadline(date)}
					dateFormat="dd/MM/yyyy"
					className="bg-transparent mt-1 block w-full px-3 py-2 border rounded-md"
					required
				/>
			</div>

			<button
				type="submit"
				className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				{mode === 'create' ? 'Create Assignment' : 'Update Assignment'}
			</button>
		</form>
	);
};

export default AssignmentForm;

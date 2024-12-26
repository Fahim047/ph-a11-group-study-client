import { FileX } from 'lucide-react';

const EmptyState = ({ title, message }) => {
	return (
		<div className="min-h-[400px] flex flex-col justify-center items-center">
			<FileX className="w-16 h-16 mb-6" /> {/* Icon */}
			<h2 className="text-2xl font-semibold mb-2">{title}</h2>
			<p className="text-center max-w-lg">{message}</p>
		</div>
	);
};

export default EmptyState;

import { CircleX } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="modal-box relative bg-blue-100 dark:text-black  rounded-lg shadow-lg p-6 max-w-lg w-full">
				<button
					className="absolute top-3 right-3 flex items-center justify-center rounded-full text-gray-600  hover:text-red-600 focus:outline-none shadow-md"
					onClick={onClose}
					aria-label="Close"
				>
					<CircleX size={40} />
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;

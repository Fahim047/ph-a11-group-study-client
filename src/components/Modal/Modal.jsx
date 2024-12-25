const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="modal-box rounded-lg shadow-lg p-6">
				<button
					className="absolute text-xl top-4 right-4 text-gray-500 hover:text-gray-700"
					onClick={onClose}
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;

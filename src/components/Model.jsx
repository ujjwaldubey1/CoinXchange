// components/Modal.js
import React from "react"

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-600">
					X
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal

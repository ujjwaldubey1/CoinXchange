// components/Button.js
import React from "react"

const Button = ({ children, onClick, className }) => {
	return (
		<button
			className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 ${className}`}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Button

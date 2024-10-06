// components/Card.js
import React from "react"

const Card = ({ title, description, children, className }) => {
	return (
		<div className={`bg-white shadow-md p-4 rounded-lg ${className}`}>
			<h2 className="text-xl font-semibold">{title}</h2>
			<p className="text-gray-600">{description}</p>
			{children}
		</div>
	)
}

export default Card

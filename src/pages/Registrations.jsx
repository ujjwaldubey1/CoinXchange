import React from "react"

const Registrations = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-gray-600">
			<div className="w-96 p-6 bg-white rounded-xl shadow-neumorphic flex flex-col items-center relative overflow-hidden">
				{/* Wavy Header */}
				<div className="absolute top-0 left-0 right-0 h-16 w-full bg-gradient-to-r from-purple-600 to-purple-400 transform translate-y-[-50%] rounded-full"></div>

				{/* Title */}
				<h1 className="text-3xl font-bold text-gray-800 my-8 relative z-10">
					Register
				</h1>

				<button className="w-full bg-red-500 text-white py-3 rounded-md shadow-neumorphic hover:bg-red-600 mb-4 transition-all duration-300">
					Sign Up
				</button>
				<button className="w-full bg-red-700 text-white py-3 rounded-md shadow-neumorphic hover:bg-red-800 transition-all duration-300">
					Sign Up as Seller
				</button>
			</div>
		</div>
	)
}

export default Registrations

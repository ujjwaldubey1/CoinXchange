import React, { useState } from "react"
import {
	FaCog,
	FaSignOutAlt,
	FaCoins,
	FaStore,
	FaGift,
	FaHistory,
	FaPercentage,
	FaBars,
	FaHeart,
	FaTimes,
} from "react-icons/fa"
import { TbBrandCoinbase } from "react-icons/tb"
import LogoImg from "../assets/image/CoinXchangeLogo.jpeg"

const UserProfile = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false) // State for sidebar toggle

	const topStores = ["Store 1", "Store 2", "Store 3"]
	const rewards = [
		{
			text: "Receive 500 coins for every 1000 coins earned",
			icon: <FaCoins />,
		},
		{ text: "Receive 10% off on your next purchase", icon: <FaPercentage /> },
		{ text: "Receive a free gift on your next purchase", icon: <FaGift /> },
	]

	const transactions = [
		{
			store: "UniQ Restaurant",
			amount: "1000Rs",
			date: "March 15, 2022",
			time: "12:30 PM",
		},
		{
			store: "Raghav Fabrications",
			amount: "500Rs",
			date: "April 23, 2024",
			time: "12:30 PM",
		},
	]

	return (
		<div className="flex h-screen bg-gradient-to-r from-gray-100 to-gray-300">
			{/* Hamburger Icon */}
			<button
				className="absolute top-4 left-4 text-2xl"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
				{isSidebarOpen ? <FaTimes /> : <FaBars />}
			</button>

			{/* Sidebar */}
			<div
				className={`${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} w-64 bg-white shadow-lg p-4 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-50`}>
				<div className="flex justify-between items-center">
					<h2 className="text-xl font-bold mb-6 cursor-pointer">Settings</h2>
					{/* Cancel button for closing sidebar */}
					<button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
						<FaTimes />
					</button>
				</div>

				<ul className="space-y-4">
					<li className="neumorphism-btn flex items-center cursor-pointer">
						<FaCog className="mr-2" /> Profile Settings
					</li>
					<li className="neumorphism-btn flex items-center cursor-pointer">
						<FaSignOutAlt className="mr-2" /> Logout
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-4 md:p-10">
				{/* Header */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0">
					<h1 className="text-2xl md:text-3xl font-bold">Your Profile</h1>
					<div className="flex items-center space-x-4 md:space-x-6">
						<div className="bg-orange-400 flex items-center justify-center p-3 md:p-4 rounded-full text-white font-bold shadow-lg transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
							<TbBrandCoinbase className="text-xl md:text-2xl mr-2" />
							<p className="text-lg md:text-xl">288 Coins</p>
						</div>

						{/* Profile Image */}
						<div className="relative">
							<img
								src={LogoImg}
								alt="Profile"
								className="rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-orange-400 object-cover shadow-lg transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
							/>
							<div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-green-400 border-2 border-white rounded-full"></div>
						</div>

						<div>
							<p className="font-bold text-lg">John Doe</p>
							<p className="text-gray-500">Premium User</p>
						</div>
					</div>
				</div>

				{/* Neumorphic Cards */}
				<div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
					{/* Top Stores */}
					<div className="bg-white p-6 md:p-10 rounded-lg shadow-lg neumorphism">
						<h2 className="text-lg md:text-xl font-bold flex items-center">
							<FaStore className="mr-2 text-blue-500" /> Favourite Stores
						</h2>
						<ul className="mt-4 space-y-4">
							{topStores.map((store, index) => (
								<li
									key={index}
									className="flex items-center neumorphism-btn p-4 bg-green-100 text-gray-700 hover:bg-green-200 hover:scale-105 transition transform ease-in-out duration-200 rounded-lg space-x-2 cursor-pointer">
									{store}
								</li>
							))}
						</ul>
					</div>

					{/* Rewards Section */}
					<div className="bg-white p-6 md:p-10 rounded-lg shadow-lg neumorphism">
						<h2 className="text-lg md:text-xl font-bold flex items-center">
							<FaGift className="mr-2 text-purple-500" /> Special Rewards
						</h2>
						<ul className="mt-4 space-y-4">
							{rewards.map((reward, index) => (
								<button
									key={index}
									className="flex items-center neumorphism-btn p-4 bg-orange-100 text-gray-700 hover:bg-orange-200 hover:scale-105 transition transform ease-in-out duration-200 rounded-lg space-x-2">
									{reward.icon}
									<span>{reward.text}</span>
								</button>
							))}
						</ul>
					</div>
					<div className="bg-white p-6 md:p-10 rounded-lg shadow-lg neumorphism">
						<h2 className="text-lg md:text-xl font-bold flex items-center">
							Your Wishlist
						</h2>
						<ul className="mt-4 space-y-4">
							{/* Add your wishlist items here */}
							<li className="p-4 neumorphism-btn">
								<FaHeart className="text-red-500" />
							</li>
							<li className="p-4 neumorphism-btn">
								<FaHeart className="text-red-500" />
								Item 2
							</li>
							<li className="p-4 neumorphism-btn">
								<FaHeart className="text-red-500" />
								Item 3
							</li>
						</ul>
						{/* Add your wishlist items here */}
					</div>
				</div>

				{/* Transaction History */}
				<div className="bg-white p-6 md:p-10 rounded-lg shadow-lg neumorphism mt-10">
					<h2 className="text-lg md:text-xl font-bold flex items-center">
						<FaHistory className="mr-2 text-red-500" /> Transaction History
					</h2>
					<ul className="mt-4 space-y-4">
						{transactions.map((transaction, index) => (
							<li key={index} className="p-4 neumorphism-btn">
								<p className="text-gray-700 font-bold">
									{transaction.amount} to {transaction.store}
								</p>
								<p className="text-sm text-gray-500">
									{transaction.date}{" "}
									<span className="ml-4">Time: {transaction.time}</span>
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default UserProfile

import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [showSignupOptions, setShowSignupOptions] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<nav className="relative">
			<div className="flex justify-between items-center p-4 bg-black text-white">
				<div className="text-2xl font-bold">CoinXchange</div>

				<div className="md:hidden" onClick={toggleMenu}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</div>

				<ul className="hidden md:flex space-x-4">
					<li>
						<a href="#" className="hover:text-yellow-400">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-yellow-400">
							About Us
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-yellow-400">
							Our Team
						</a>
					</li>
					<li>
						<a
							href="#"
							className="bg-green-500 text-black px-4 py-2 rounded light-white">
							Log In
						</a>
					</li>

					{/* Get Started Button with Hover for Dropdown */}
					<li
						className="relative"
						onMouseEnter={() => setShowSignupOptions(true)}
						onMouseLeave={() => setShowSignupOptions(false)}>
						<button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
							Get Started
						</button>

						{/* Dropdown for signup options */}
						{showSignupOptions && (
							<div
								className="absolute top-full mt-2 bg-white shadow-lg rounded-lg"
								onMouseEnter={() => setShowSignupOptions(true)} // Keep open when hovering over the dropdown
								onMouseLeave={() => setShowSignupOptions(false)} // Close when leaving the dropdown
							>
								<Link
									to="/sign-up-customer"
									className="block px-4 py-2 text-black hover:bg-gray-200">
									Sign up as Customer
								</Link>
								<Link
									to="/sign-up-seller"
									className="block px-4 py-2 text-black hover:bg-gray-200">
									Sign up as Seller
								</Link>
							</div>
						)}
					</li>
				</ul>
			</div>

			{/* Sidebar for Mobile */}
			<div
				className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 transition-opacity ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={closeMenu}>
				<div
					className={`fixed top-0 left-0 w-64 h-full bg-white p-6 transition-transform transform ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					}`}
					onClick={(e) => e.stopPropagation()}>
					<FaTimes size={24} onClick={closeMenu} className="cursor-pointer" />
					<ul className="flex flex-col space-y-4">
						<li>
							<a href="#" className="hover:text-yellow-400">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-yellow-400">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-yellow-400">
								Our Team
							</a>
						</li>
						<li>
							<a
								href="#"
								className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600">
								Log In
							</a>
						</li>
						<li>
							<Link
								to="/sign-up-customer"
								className="block px-4 py-2 text-black bg-yellow-500 rounded hover:bg-yellow-600">
								Sign up as Customer
							</Link>
						</li>
						<li>
							<Link
								to="/sign-up-seller"
								className="block px-4 py-2 text-black bg-yellow-500 rounded hover:bg-yellow-600">
								Sign up as Seller
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

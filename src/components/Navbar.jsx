import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa" // Icons for hamburger and close

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

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
					{/* Hamburger Icon */}
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</div>

				{/* Full Menu for larger screens */}
				<ul className="hidden md:flex space-x-4">
					<li>
						<a
							href="#"
							className="hover:text-yellow-400 transition duration-300">
							Home
						</a>
					</li>
					<li>
						<a
							href="#"
							className="hover:text-yellow-400 transition duration-300">
							About Us
						</a>
					</li>
					<li>
						<a
							href="#"
							className="hover:text-yellow-400 transition duration-300">
							Our Team
						</a>
					</li>
					<li>
						<a
							href="#"
							className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300">
							Log In
						</a>
					</li>
					<li>
						<a
							href="#"
							className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition duration-300">
							Get Started
						</a>
					</li>
				</ul>
			</div>

			{/* Sidebar and overlay */}
			<div
				className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 transition-opacity ${
					isOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={closeMenu}>
				{/* Sidebar */}
				<div
					className={`fixed top-0 left-0 w-64 h-full bg-white p-6 transition-transform transform ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					}`}
					onClick={(e) => e.stopPropagation()}>
					<div className="flex justify-between items-center mb-6">
						<div className="text-2xl font-bold text-black">Menu</div>
						<FaTimes size={24} onClick={closeMenu} className="cursor-pointer" />
					</div>

					<ul className="flex flex-col space-y-4">
						<li>
							<a
								href="#"
								className="hover:text-yellow-400 transition duration-300">
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-yellow-400 transition duration-300">
								About Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-yellow-400 transition duration-300">
								Our Team
							</a>
						</li>
						<li>
							<a
								href="#"
								className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300">
								Log In
							</a>
						</li>
						<li>
							<a
								href="#"
								className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition duration-300">
								Get Started
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [showSignupOptions, setShowSignupOptions] = useState(false)
	const [showLoginOptions, setShowLoginOptions] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
		setShowSignupOptions(false)
		setShowLoginOptions(false)
	}

	const handleLoginDropdown = () => {
		setShowLoginOptions(!showLoginOptions)
		setShowSignupOptions(false) // Close the signup options when login is open
	}

	const handleSignupDropdown = () => {
		setShowSignupOptions(!showSignupOptions)
		setShowLoginOptions(false) // Close the login options when signup is open
	}

	return (
		<nav className="relative">
			<div className="flex justify-between items-center p-4 bg-black text-white">
				<div className="text-2xl font-bold">CoinXchange</div>

				<div className="md:hidden" onClick={toggleMenu}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-4">
					<li>
						<a href="#" className="hover:text-yellow-400">
							Home
						</a>
					</li>
					<li>
						<Link
							to="/about-us"
							className="hover:text-yellow-400 cursor-pointer">
							About Us
						</Link>
					</li>

					{/* Log In Button with Dropdown for Desktop */}
					<li className="relative">
						<button
							className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
							onClick={handleLoginDropdown}>
							Log In
						</button>

						{/* Dropdown for login options */}
						{showLoginOptions && (
							<div
								className="absolute top-full mt-2 bg-white shadow-lg rounded-lg z-50"
								onMouseEnter={() => setShowLoginOptions(true)}
								onMouseLeave={() => setShowLoginOptions(false)}>
								<Link
									to="/login-customer"
									className="block px-4 py-2 text-black hover:bg-gray-200">
									Log in as Customer
								</Link>
								<Link
									to="/login-seller"
									className="block px-4 py-2 text-black hover:bg-gray-200">
									Log in as Seller
								</Link>
							</div>
						)}
					</li>

					{/* Get Started Button with Dropdown for Desktop */}
					<li className="relative">
						<button
							className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
							onClick={handleSignupDropdown}>
							Get Started
						</button>

						{/* Dropdown for signup options */}
						{showSignupOptions && (
							<div
								className="absolute top-full mt-2 bg-white shadow-lg rounded-lg z-50"
								onMouseEnter={() => setShowSignupOptions(true)}
								onMouseLeave={() => setShowSignupOptions(false)}>
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
							<Link to="/about-us" className="hover:text-yellow-400">
								About Us
							</Link>
						</li>
						<li>
							<a href="#" className="hover:text-yellow-400">
								Our Team
							</a>
						</li>

						{/* Log In Button with Dropdown for Mobile */}
						<li className="relative">
							<button
								className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
								onClick={handleLoginDropdown}>
								Log In
							</button>

							{/* Dropdown for login options */}
							{showLoginOptions && (
								<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg z-50">
									<Link
										to="/login-customer"
										className="block px-4 py-2 text-black hover:bg-gray-200">
										Log in as Customer
									</Link>
									<Link
										to="/login-seller"
										className="block px-4 py-2 text-black hover:bg-gray-200">
										Log in as Seller
									</Link>
								</div>
							)}
						</li>

						{/* Get Started Button with Dropdown for Mobile */}
						<li className="relative">
							<button
								className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
								onClick={handleSignupDropdown}>
								Get Started
							</button>

							{/* Dropdown for signup options */}
							{showSignupOptions && (
								<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg z-50">
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
			</div>
		</nav>
	)
}

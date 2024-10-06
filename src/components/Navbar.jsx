import React from "react"

export const Navbar = () => {
	return (
		<nav className="flex justify-between items-center p-4 bg-black text-white">
			<div className="text-2xl font-bold">CoinXchange</div>
			<ul className="flex space-x-4">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About Us</a>
				</li>
				<li>
					<a href="#">Our Team</a>
				</li>
				<li>
					<a href="#" className="border px-4 py-2">
						Log In
					</a>
				</li>
				<li>
					<a href="#" className="bg-yellow-500 text-black px-4 py-2 rounded">
						Get Started
					</a>
				</li>
			</ul>
		</nav>
	)
}

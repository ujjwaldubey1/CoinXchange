import React from "react"

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-10 px-6 rounded-t-2xl shadow-inner shadow-gray-800">
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
				{/* CoinXchange Info */}
				<div>
					<h3 className="text-3xl font-bold mb-4">CoinXchange</h3>
					<p className="mb-6">Your coins, everywhere you shop.</p>
					<div className="flex space-x-4">
						<a
							href="#"
							className="bg-gray-900 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a
							href="#"
							className="bg-gray-900 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
							<i className="fab fa-twitter"></i>
						</a>
						<a
							href="#"
							className="bg-gray-900 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
							<i className="fab fa-instagram"></i>
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h4 className="text-xl font-bold mb-4">Quick Links</h4>
					<ul>
						<li className="mb-2 hover:text-yellow-500 transition-colors duration-300">
							<a href="#">Home</a>
						</li>
						<li className="mb-2 hover:text-yellow-500 transition-colors duration-300">
							<a href="#">About Us</a>
						</li>
						<li className="mb-2 hover:text-yellow-500 transition-colors duration-300">
							<a href="#">Services</a>
						</li>
						<li className="hover:text-yellow-500 transition-colors duration-300">
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>

				{/* Contact Us */}
				<div>
					<h4 className="text-xl font-bold mb-4">Contact Us</h4>
					<p className="mb-2">Email: support@coinxchange.com</p>
					<p>Phone: +91-1234567890</p>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="mt-8 border-t border-gray-800 pt-4 text-center">
				<p>© 2024 CoinXchange. All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer

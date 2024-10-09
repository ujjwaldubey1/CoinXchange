import React from "react"
import "../Styles/Singup.css"
import loginPageImg from "../assets/image/loginPageImg.webp" // Import image

const Signup = () => {
	return (
		<div className="signup-container">
			<div className="signup-content">
				<div className="signup-image">
					<img src={loginPageImg} alt="Astro background" />{" "}
					{/* Use imported image */}
					<div className="image-text">
						<h1>
							Dive into the future of finance—Sign up for CoinXchange now!
						</h1>
					</div>
				</div>
				<div className="signup-form">
					<h2>Create Account</h2>
					<form>
						<div className="form-group">
							<label htmlFor="email">Email Id </label>
							<input type="text" id="email" name="email" placeholder="Enter " />
						</div>
						<div className="form-group">
							<label htmlFor="name">Phone NO</label>
							<input
								type="number"
								id="name"
								name="PhoneNO"
								placeholder="Enter Phone Number"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								id="username"
								name="username"
								placeholder="Enter username"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Enter password"
							/>
						</div>
						<div className="form-group">
							<select
								id="Gender"
								name="Gender"
								className="mt-2 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
								<option className="" value="" disabled selected>
									Select your gender
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="DateOfBirt">Date Of Birth</label>
							<input type="date" placeholder="Enter Your Date Of Birth" />
						</div>

						<div className="form-group">
							<label className="flex gap-2 check-label">
								<input className="inline" type="checkbox" name="terms" />
								<span>I agree to the terms and privacy policy</span>
							</label>
						</div>
						<button type="submit" className="btn-submit bg-[--secondary-color]">
							Sign Up
						</button>
						<p className="text-center mt-4">
							Already have an account? <a href="/login">Login</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup

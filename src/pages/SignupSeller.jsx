import React from "react"
import "../Styles/Singup.css"
import loginSeller from "../assets/image/shopOwnerImg.webp" // Import image

const Signup = () => {
	return (
		<div className="signup-container">
			<div className="signup-content">
				<div className="signup-image">
					<img src={loginSeller} alt="Astro background" />{" "}
				</div>
				<div className="signup-form">
					<h2>Create Account</h2>
					<form>
						<div className="form-group">
							<label htmlFor="name">Seller Name</label>
							<input type="text" id="name" name="name" placeholder="Enter " />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email Id </label>
							<input type="text" id="email" name="email" placeholder="Enter " />
						</div>
						<div className="form-group">
							<label htmlFor="name">Phone No</label>
							<input
								type="number"
								id="name"
								name="PhoneNO"
								placeholder="Enter Phone Number"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="username">Store Name</label>
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
							<label htmlFor="City">Enter City</label>
							<input type="text" placeholder="Enter City" />
						</div>
						<div className="form-group">
							<label htmlFor="ShopName">Enter Shop Name</label>
							<input type="text" placeholder="Enter Shope Name" />
						</div>
						<div className="form-group">
							<label htmlFor="Catagory">Catagory</label>
							<input type="text" placeholder="Enter Catagory" />
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
							Already have an account? <a href="#">Login</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup

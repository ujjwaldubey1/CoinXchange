import React, { useState } from "react"
import "../Styles/Singup.css"
import loginPageImg from "../assets/image/loginPageImg.webp" // Import image
import axios from "axios"

const Signup = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/customer/register",
                formData
            )
            console.log(response.data.customer)
        } catch (err) {
            console.log("error", err)
        }
    }
    return (
        <div className="signup-container">
            <div className="signup-content">
                <div className="signup-image">
                    <img src={loginPageImg} alt="Astro background" />{" "}
                    {/* Use imported image */}
                    <div className="image-text">
                        <h1>
                            Dive into the future of finance—Sign up for
                            CoinXchange now!
                        </h1>
                    </div>
                </div>
                <div className="signup-form">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Id </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone NO</label>
                            <input
                                type="number"
                                id="name"
                                name="phoneNumber"
                                placeholder="Enter Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <select
                                id="Gender"
                                name="gender"
                                className="mt-2 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option className="" value="" disabled selected>
                                    Select your gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date Of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                placeholder="Enter Your Date Of Birth"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="flex gap-2 check-label">
                                <input
                                    className="inline"
                                    type="checkbox"
                                    name="terms"
                                />
                                <span>
                                    I agree to the terms and privacy policy
                                </span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn-submit bg-[--secondary-color]"
                        >
                            Sign Up
                        </button>
                        <p className="text-center mt-4">
                            Already have an account?{" "}
                            <a href="/login-customer">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup

import React, { useState } from "react"
import "../Styles/Singup.css"
import loginSeller from "../assets/image/shopOwnerImg.webp" // Import image
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/seller/register",
                formData
            )
            console.log(response.data.seller)
            navigate("/seller/dashboard")
        } catch (err) {
            console.log("error", err)
        }
    }
    return (
        <div className="signup-container">
            <div className="signup-content">
                <div className="signup-image">
                    <img src={loginSeller} alt="Astro background" />{" "}
                </div>
                <div className="signup-form">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Seller Name</label>
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
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone No</label>
                            <input
                                type="number"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Enter Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shopName">Shop Name</label>
                            <input
                                type="text"
                                id="shopName"
                                name="shopName"
                                placeholder="Enter Shop Name"
                                value={formData.shopName}
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
                            <label htmlFor="City">Enter City</label>
                            <input
                                type="text"
                                placeholder="Enter City"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="catagory">Catagory</label>
                            <input
                                type="text"
                                id="category"
                                placeholder="Enter Catagory"
                                name="category"
                                value={formData.category}
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
                            <Link to={"/login-seller"}>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup

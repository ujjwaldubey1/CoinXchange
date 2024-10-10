import { FcGoogle } from "react-icons/fc"
import { FaFacebookSquare, FaApple } from "react-icons/fa"
import loginPageImg from "../assets/image/loginPageImg.webp"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const Login = () => {
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
                "http://localhost:3000/api/auth/customer/login",
                formData
            )
            console.log(response.data.customer)
            navigate("/customer/dashboard")
        } catch (err) {
            console.log("error", err)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg flex overflow-hidden max-w-4xl w-full">
                {/* Left Side */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Welcome back!
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Feel the Real reward and get Claimed
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                            Login
                        </button>
                        <a href="#" className="text-right text-gray-500 block">
                            Forgot Password?
                        </a>
                    </form>
                    <div className="text-center my-4 text-gray-500">
                        or continue with
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <FcGoogle />
                        </button>
                        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaFacebookSquare />
                        </button>
                        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaApple />
                        </button>
                    </div>
                    <p className="text-center mt-4 text-gray-600">
                        Not a member?{" "}
                        <Link to="/sign-up-customer" className="text-black">
                            Register now
                        </Link>
                    </p>
                </div>
                {/* Right Side with Video */}
                <div className="hidden md:block w-1/2 bg-gray-100 p-10 flex items-center justify-center">
                    <div className="text-center login-video">
                        <h2 className="text-2xl font-semibold mb-4">
                            Make sure you claim Your
                        </h2>
                        <p className="text-gray-500 mb-6">with CoinXchange</p>
                        <div className="h-[250px]">
                            <img
                                className=" rounded-md"
                                src={loginPageImg}
                                alt="img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

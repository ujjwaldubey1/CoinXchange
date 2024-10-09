import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Transactions from "./pages/Transactions"
import Registrations from "./pages/Registrations"
import SignupCustomer from "./pages/SignupCustomer" // New page for Customer
import SignupSeller from "./pages/SignupSeller" // New page for Seller

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/transactions" element={<Transactions />} />
					<Route path="/registration" element={<Registrations />} />
					<Route path="/sign-up-customer" element={<SignupCustomer />} />{" "}
					<Route path="/sign-up-seller" element={<SignupSeller />} />{" "}
					{/* Route for Seller */}
				</Routes>
			</div>
		</Router>
	)
}

export default App

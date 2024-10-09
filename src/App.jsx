import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Transactions from "./pages/Transactions"
import Registrations from "./pages/Registrations"
import SignupCustomer from "./pages/SignupCustomer" // New page for Customer
import SignupSeller from "./pages/SignupSeller" // New page for Seller
import CustomerLogin from "./pages/CustomerLogin" // New page for
import SellerLogin from "./pages/SellerLogin" // New page for Seller
import AboutUs from "./pages/AboutUs"
import UserProfile from "./pages/UserPrfile" // New page for User Profile
import SellerProfile from "./pages/SellerProfile"
function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/transactions" element={<Transactions />} />
					<Route path="/registration" element={<Registrations />} />
					<Route path="/sign-up-customer" element={<SignupCustomer />} />{" "}
					<Route path="/sign-up-seller" element={<SignupSeller />} />
					<Route path="/login-customer" element={<CustomerLogin />} />
					<Route path="/login-seller" element={<SellerLogin />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/user-profile" element={<UserProfile />} />
					<Route path="/seller-profile" element={<SellerProfile />} />
					{/* Route for Seller */}
				</Routes>
			</div>
		</Router>
	)
}

export default App

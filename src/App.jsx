// App.js
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Transactions from "./pages/Transactions"
import FeatureSection from "./components/FreatureSection"
import Footer from "./components/Footer"
function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
				<FeatureSection />
				<Footer></Footer>
			</div>
		</Router>
	)
}

export default App

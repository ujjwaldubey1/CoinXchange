// pages/Home.js
import React from "react"
import Card from "../components/Card"
import Button from "../components/Button"
import { Navbar } from "../components/Navbar"
import Hero from "../components/Hero"
import CTASection from "../components/CTASection"
const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<CTASection />
			<div>
				<h1 className="text-4xl font-bold mb-6">Welcome to CoinXchange</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card title="Coin Balance" description="Your current balance">
						<p className="text-2xl">500 Coins</p>
					</Card>

					<Card
						title="Recent Transactions"
						description="Your latest transactions">
						<ul>
							<li>Store 1: 50 Coins</li>
							<li>Store 2: 100 Coins</li>
						</ul>
					</Card>

					<Card title="Featured Stores" description="Check out these stores">
						<Button>Visit Store</Button>
					</Card>
				</div>
			</div>
		</>
	)
}

export default Home

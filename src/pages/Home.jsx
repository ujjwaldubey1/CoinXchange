// pages/Home.js
import Card from "../components/Card"
import Button from "../components/Button"
import { Navbar } from "../components/Navbar"
import Footer from "../components/Footer"
import FeatureSection from "../components/FreatureSection"
import Hero from "../components/Hero"
import CTASection from "../components/CTASection"

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<CTASection />
			<div className="container mx-auto py-10">
				<h1 className="text-4xl font-bold mb-8 text-center">
					Welcome to CoinXchange
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<Card
						title="Coin Balance"
						description="Your current balance"
						className="shadow-neumorphic hover:shadow-neumorphic-hover">
						<p className="text-2xl">500 Coins</p>
					</Card>

					<Card
						title="Recent Transactions"
						description="Your latest transactions"
						className="shadow-neumorphic hover:shadow-neumorphic-hover">
						<ul>
							<li>Store 1: 50 Coins</li>
							<li>Store 2: 100 Coins</li>
						</ul>
					</Card>

					<Card
						title="Featured Stores"
						description="Check out these stores"
						className="shadow-neumorphic hover:shadow-neumorphic-hover">
						<Button className="bg-yellow-500 text-black rounded-full px-6 py-2 shadow-neumorphic hover:scale-105 transition-all duration-300 ease-in-out">
							Visit Store
						</Button>
					</Card>
				</div>
				<FeatureSection />
				<Footer></Footer>
			</div>
		</>
	)
}

export default Home

import "../Styles/AboutUs.css"
import UjjwalImg from "../assets/image/Ujjwla.jpg"
import SumitImg from "../assets/image/sumit.jpg"
import RiteshImg from "../assets/image/ritesh.jpg"
import vikramImg from "../assets/image/mali.jpg"
const AboutUs = () => {
	return (
		<section className="bg-black text-white py-20 px-4">
			<div className="container mx-auto text-center">
				{/* About Us Heading */}
				<h1 className="text-5xl font-bold mb-6">About Us</h1>
				<p className="text-lg mb-12">
					We are <span className="text-yellow-500">CoinXchange</span>, an
					innovative platform revolutionizing how customers and businesses
					interact through loyalty programs and digital transactions.
				</p>

				{/* What We Do Section */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-4">What We Do</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						At CoinXchange, we connect businesses with customers through a
						powerful loyalty program. We help customers earn rewards and redeem
						them across multiple stores, offering seamless, transparent, and
						innovative solutions for digital payments.
					</p>
				</div>

				{/* Founders Section */}
				<div className="mb-16 ">
					<h2 className="text-3xl font-bold mb-8">Meet Our Founders</h2>
					<div className="flex flex-wrap justify-center gap-8 ">
						<div className="founder-container flex">
							<div className="founder-card">
								<img
									src={UjjwalImg}
									alt="Ujjwal Dubey"
									className="founder-img"
								/>
								<h3 className="founder-name">Ujjwal Dubey</h3>
								<p className="founder-role">CEO & Founder</p>
							</div>
							<div className="founder-card">
								<img
									src={SumitImg}
									alt="Sumit Maurya"
									className="founder-img"
								/>
								<h3 className="founder-name">Sumit Maurya</h3>
								<p className="founder-role">Co-Founder & CTO</p>
							</div>
							<div className="founder-card">
								<img
									src={RiteshImg}
									alt="Ritesh Yadav"
									className="founder-img"
								/>
								<h3 className="founder-name">Ritesh Yadav</h3>
								<p className="founder-role">Co-Founder & COO</p>
							</div>
							<div className="founder-card">
								<img
									src={vikramImg}
									alt="Vikram Mali"
									className="founder-img"
								/>
								<h3 className="founder-name">Vikram Mali</h3>
								<p className="founder-role">Co-Founder & CMO</p>
							</div>
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<div className="text-4xl font-bold">150+</div>
					<p className="text-gray-400">Projects Done</p>
					<div className="text-4xl font-bold">75+</div>
					<p className="text-gray-400">Happy Customers</p>
					<div className="text-4xl font-bold">20+</div>
					<p className="text-gray-400">Awards Won</p>
					<div className="text-4xl font-bold">45+</div>
					<p className="text-gray-400">Team Members</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUs

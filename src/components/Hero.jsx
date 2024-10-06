import React from "react"
import heroImage from "../assets/image/HeroImg.webp"

const Hero = () => {
	return (
		<section className="bg-black text-white py-20">
			<div className="container mx-auto text-center">
				<h1 className="text-4xl font-bold mb-6">
					Explore our intuitive platform for seamless coin transactions.
				</h1>
				\
				<div className="flex justify-center">
					<img src={heroImage} alt="Graph" />
				</div>
			</div>
		</section>
	)
}

export default Hero

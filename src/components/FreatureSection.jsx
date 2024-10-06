// components/FeatureSection.js
import React from "react"

const FeatureSection = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12">
					Unlock Your Coin Potential
				</h2>
				<div className="grid grid-cols-2 gap-8">
					<div className="bg-gray-800 p-8 text-white rounded-lg">
						<h3 className="text-xl mb-4">
							Experience seamless transactions today.
						</h3>
						<p>Discover the future of digital currency.</p>
					</div>
					<div className="bg-gray-800 p-8 text-white rounded-lg">
						<h3 className="text-xl mb-4">Earn coins while you shop.</h3>
						<p>Transform your shopping experience. Start Earning.</p>
						{/* Illustration */}
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeatureSection

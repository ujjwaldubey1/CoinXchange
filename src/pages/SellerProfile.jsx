import { useState } from "react"
import {
	FaStore,
	FaGift,
	FaCoins,
	FaChartLine,
	FaEdit,
	FaPlus,
	FaBars,
	FaTimes,
	FaTrash,
} from "react-icons/fa"
import LogoImg from "../assets/image/CoinXchangeLogo.jpeg"

const SellerProfile = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Sidebar toggle state
	const [isEditMode, setIsEditMode] = useState(false) // Edit mode for store details

	// Store details state
	const [storeName, setStoreName] = useState("John's Electronics")
	const [storeAddress, setStoreAddress] = useState("123 Electronics Street")
	const [storeEmail, setStoreEmail] = useState("john@electronics.com")

	// Product and rewards state
	const [products, setProducts] = useState([
		{ name: "Smartphone X", price: "₹50,000", stock: 10 },
		{ name: "Gaming Console Y", price: "₹40,000", stock: 5 },
		{ name: "Laptop Z", price: "₹70,000", stock: 8 },
	])
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		stock: "",
	})

	const [rewards, setRewards] = useState([
		{ description: "Get 100 coins for every ₹1,000 spent", icon: <FaCoins /> },
		{
			description: "10% off on next purchase after 5 orders",
			icon: <FaGift />,
		},
	])
	const [newReward, setNewReward] = useState({ description: "" })

	// Sales data
	const salesData = [
		{ date: "October 1, 2024", item: "Smartphone X", amount: "₹50,000" },
		{ date: "October 5, 2024", item: "Laptop Z", amount: "₹70,000" },
		{ date: "October 7, 2024", item: "Gaming Console Y", amount: "₹40,000" },
	]

	// Scroll to specific section
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId)
		if (section) {
			section.scrollIntoView({ behavior: "smooth" })
			setIsSidebarOpen(false) // Close sidebar on navigation
		}
	}

	// Add new product
	const handleAddProduct = () => {
		if (newProduct.name && newProduct.price && newProduct.stock) {
			setProducts([...products, newProduct])
			setNewProduct({ name: "", price: "", stock: "" })
		}
	}

	// Remove product
	const handleRemoveProduct = (index) => {
		const updatedProducts = products.filter((_, i) => i !== index)
		setProducts(updatedProducts)
	}

	// Add new reward
	const handleAddReward = () => {
		if (newReward.description) {
			setRewards([
				...rewards,
				{ description: newReward.description, icon: <FaGift /> },
			])
			setNewReward({ description: "" })
		}
	}

	return (
		<div className="relative flex h-screen bg-gradient-to-r from-gray-100 to-gray-300">
			{/* Hamburger Icon for Sidebar */}
			<button
				className="absolute top-4 left-4 text-2xl z-50"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
				{isSidebarOpen ? "" : <FaBars />}
			</button>

			{/* Sidebar */}
			<div
				className={`${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} w-64 bg-white shadow-lg p-4 fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-40`}>
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-xl font-bold">Menu</h2>
					<button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
						<FaTimes />
					</button>
				</div>
				<ul className="space-y-4">
					<li
						className="cursor-pointer flex items-center"
						onClick={() => scrollToSection("store-details")}>
						<FaStore className="mr-2" /> Store Details
					</li>
					<li
						className="cursor-pointer flex items-center"
						onClick={() => scrollToSection("products")}>
						<FaPlus className="mr-2" /> Manage Products
					</li>
					<li
						className="cursor-pointer flex items-center"
						onClick={() => scrollToSection("sales-data")}>
						<FaChartLine className="mr-2" /> Sales Data
					</li>
					<li
						className="cursor-pointer flex items-center"
						onClick={() => scrollToSection("rewards")}>
						<FaGift className="mr-2" /> Loyalty Rewards
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-4 md:p-10">
				{/* Header Section */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0">
					<h1 className="text-2xl md:text-3xl font-bold">
						Welcome, {storeName}
					</h1>
					<div className="relative">
						<img
							src={LogoImg}
							alt="Store Logo"
							className="rounded-full w-16 h-16 border-4 border-orange-400 object-cover shadow-lg"
						/>
						<div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-green-400 border-2 border-white rounded-full"></div>
					</div>
				</div>

				{/* Store Details Section */}
				<div
					id="store-details"
					className="bg-white p-6 md:p-10 rounded-lg shadow-lg mb-10">
					<h2 className="text-lg md:text-xl font-bold flex items-center">
						<FaStore className="mr-2 text-blue-500" /> Store Details
					</h2>
					{isEditMode ? (
						<div className="mt-4">
							<input
								type="text"
								className="w-full p-2 border border-gray-300 rounded-md mb-4"
								value={storeName}
								onChange={(e) => setStoreName(e.target.value)}
								placeholder="Store Name"
							/>
							<input
								type="text"
								className="w-full p-2 border border-gray-300 rounded-md mb-4"
								value={storeAddress}
								onChange={(e) => setStoreAddress(e.target.value)}
								placeholder="Store Address"
							/>
							<input
								type="email"
								className="w-full p-2 border border-gray-300 rounded-md mb-4"
								value={storeEmail}
								onChange={(e) => setStoreEmail(e.target.value)}
								placeholder="Store Email"
							/>
							<button
								className="bg-green-500 text-white px-4 py-2 rounded-md"
								onClick={() => setIsEditMode(false)}>
								Save
							</button>
							<button
								className="bg-red-500 text-white px-4 py-2 ml-4 rounded-md"
								onClick={() => setIsEditMode(false)}>
								Cancel
							</button>
						</div>
					) : (
						<div className="mt-4">
							<h3 className="text-lg font-bold">{storeName}</h3>
							<p className="text-gray-600">Address: {storeAddress}</p>
							<p className="text-gray-600">Email: {storeEmail}</p>
							<button
								className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
								onClick={() => setIsEditMode(true)}>
								<FaEdit className="inline mr-2" />
								Edit Store Details
							</button>
						</div>
					)}
				</div>

				{/* Products Section */}
				<div
					id="products"
					className="bg-white p-6 md:p-10 rounded-lg shadow-lg mb-10">
					<h2 className="text-lg md:text-xl font-bold flex items-center">
						<FaPlus className="mr-2 text-purple-500" /> Manage Products
					</h2>
					<ul className="mt-4 space-y-4">
						{products.map((product, index) => (
							<li
								key={index}
								className="flex justify-between items-center p-4 bg-orange-100 rounded-lg shadow-md space-x-4">
								<div>
									<h4 className="font-bold">{product.name}</h4>
									<p>Price: {product.price}</p>
									<p>Stock: {product.stock}</p>
								</div>
								<button
									className="bg-red-500 text-white p-2 rounded-md"
									onClick={() => handleRemoveProduct(index)}>
									<FaTrash />
								</button>
							</li>
						))}
					</ul>
					<div className="mt-6">
						<input
							type="text"
							className="p-2 border border-gray-300 rounded-md mr-2"
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({ ...newProduct, name: e.target.value })
							}
							placeholder="Product Name"
						/>
						<input
							type="text"
							className="p-2 border border-gray-300 rounded-md mr-2"
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({ ...newProduct, price: e.target.value })
							}
							placeholder="Price"
						/>
						<input
							type="number"
							className="p-2 border border-gray-300 rounded-md mr-2"
							value={newProduct.stock}
							onChange={(e) =>
								setNewProduct({ ...newProduct, stock: e.target.value })
							}
							placeholder="Stock"
						/>
						<button
							className="bg-green-500 text-white px-4 py-2 rounded-md"
							onClick={handleAddProduct}>
							<FaPlus className="inline mr-2" />
							Add Product
						</button>
					</div>
				</div>

				{/* Sales Data Section */}
				<div
					id="sales-data"
					className="bg-white p-6 md:p-10 rounded-lg shadow-lg mb-10">
					<h2 className="text-lg md:text-xl font-bold flex items-center">
						<FaChartLine className="mr-2 text-green-500" /> Sales Data
					</h2>
					<ul className="mt-4 space-y-4">
						{salesData.map((sale, index) => (
							<li key={index} className="p-4 bg-green-100 rounded-lg shadow-md">
								<p className="font-bold">
									{sale.amount} - {sale.item}
								</p>
								<p className="text-gray-600">Date: {sale.date}</p>
							</li>
						))}
					</ul>
				</div>

				{/* Rewards Section */}
				<div id="rewards" className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
					<h2 className="text-lg md:text-xl font-bold flex items-center">
						<FaGift className="mr-2 text-purple-500" /> Loyalty Rewards
					</h2>
					<ul className="mt-4 space-y-4">
						{rewards.map((reward, index) => (
							<li
								key={index}
								className="flex items-center p-4 bg-orange-100 rounded-lg shadow-md space-x-4">
								{reward.icon}
								<p>{reward.description}</p>
							</li>
						))}
					</ul>
					<div className="mt-6">
						<input
							type="text"
							className="p-2 border border-gray-300 rounded-md mr-2"
							value={newReward.description}
							onChange={(e) => setNewReward({ description: e.target.value })}
							placeholder="Reward Description"
						/>
						<button
							className="bg-blue-500 text-white px-4 py-2 rounded-md"
							onClick={handleAddReward}>
							<FaPlus className="inline mr-2" />
							Add New Reward
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SellerProfile

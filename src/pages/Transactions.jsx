import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import { fetchTransactions } from "../services/api"

const Transactions = () => {
	const [transactions, setTransactions] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getTransactions = async () => {
			try {
				const data = await fetchTransactions()
				console.log("Fetched transactions:", data)
				if (Array.isArray(data)) {
					setTransactions(data)
				} else {
					setTransactions([])
				}
				setLoading(false)
			} catch (err) {
				console.error("Failed to fetch transactions:", err)
				setError("Failed to load transactions.")
				setLoading(false)
			}
		}

		getTransactions()
	}, [])
	if (loading) {
		return <div>Loading transactions...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-3xl font-bold mb-6">Transaction History</h1>
			{transactions.length === 0 ? (
				<div>No transactions available.</div>
			) : (
				<div className="grid grid-cols-1 gap-6">
					{transactions.map((transaction, index) => {
						const { store, amount, date } = transaction
						return (
							<Card key={index} title={store} description={`Coins: ${amount}`}>
								<p>Date: {date}</p>
							</Card>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Transactions

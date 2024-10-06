import axios from "axios"

export const fetchTransactions = async () => {
	const response = await axios.get("/api/transactions")
	return response.data
}

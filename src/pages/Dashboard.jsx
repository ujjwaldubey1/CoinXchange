import React from "react"
import CustomerNavbar from "../components/CustomerNavbar"
import CustomerSidebar from "../components/CustomerSidebar"
import ProductPage from "./ProductPage"

const Dashboard = () => {
    return (
        <div>
            <CustomerNavbar />
            <div className="flex justify-between gap-3">
                <CustomerSidebar />
                <ProductPage />
            </div>
        </div>
    )
}

export default Dashboard

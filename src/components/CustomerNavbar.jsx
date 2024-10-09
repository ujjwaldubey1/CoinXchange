import React from "react"

const CustomerNavbar = () => {
    return (
        <div className="mb-5">
            <nav className="w-full p-[--btn-pd] px-0 flex justify-between items-center">
                <div className="font-bold text-2xl">CoinX.</div>
                <div className="w-[90%] flex gap-4">
                    <input
                        type="text"
                        placeholder="Search Products..."
                        className="w-full border-2 p-[--btn-pd] rounded-full"
                    />
                    <button className="btn-secondary p-[--btn-pd] px-7 rounded-full text-white">
                        Search
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default CustomerNavbar

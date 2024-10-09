import React from "react"
// import Earbuds from "../assets/image/earbuds.jpg"
import Img1 from "../assets/image/img1.jpg"
// import Spray from "../assets/image/Spray.jpg"
import Jamun from "../assets/image/jamun.png"
import Silk from "../assets/image/silk.png"
// import Roll from "../assets/image/roll.png"
import Geometry from "../assets/image/geometry.png"
import ProductCard from "../components/ProductCard"

const ProductPage = () => {
    return (
        <div className="w-[95%] flex gap-2 flex-wrap justify-center">
            {/* <ProductCard
                title="NFT Art"
                seller="DhoomKetu"
                price="499"
                imgSrc={Spray}
            /> */}
            {/* <ProductCard
                title="Boult 290T"
                seller="John Doe"
                price="999"
                imgSrc={Earbuds}
            /> */}
            <ProductCard
                title="Cadbury Silk"
                seller="Vikram"
                price="99"
                imgSrc={Silk}
            />
            {/* <ProductCard
                title="Cream Roll"
                seller="Jayesh"
                price="49"
                imgSrc={Roll}
            /> */}
            <ProductCard
                title="Gulab Jamun"
                seller="Mithai Lal"
                price="79"
                imgSrc={Jamun}
            />
            <ProductCard
                title="Geometry Set"
                seller="Mast Magan"
                price="499"
                imgSrc={Geometry}
            />
            <ProductCard
                title="Watch"
                seller="Nagoori"
                price="599"
                imgSrc={Img1}
            />
        </div>
    )
}

export default ProductPage

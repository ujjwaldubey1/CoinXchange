import "../Styles/ProductCard.css"

const ProductCard = (props) => {
    const { imgSrc, title, seller, price } = props
    // console.log("Check")
    return (
        <div className="card flex flex-col p-[--btn-pd]">
            <div className="img-wrapper">
                <img src={imgSrc} alt="" loading="lazy" />
            </div>
            <div className="info">
                <h3 className="card-title text-2xl font-bold">{title}</h3>
                <h4 className="seller">
                    By <span className="font-semibold">{seller}</span>
                </h4>
            </div>
            <div
                className="bid-wrapper flex items-center justify-between
            "
            >
                <div className="bid-dets">
                    <p className="curr">&#x20B9;{price}</p>
                </div>
                <button className="btn btn-secondary">Buy</button>
            </div>
        </div>
    )
}

export default ProductCard

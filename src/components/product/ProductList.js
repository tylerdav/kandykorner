import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Products.css"

export default () => {
    const { theProducts } = useContext(ProductContext)

    return (
        <div className="products">
        {
            theProducts.map(loc => <Product key={loc.id} product={loc} />)
        }
        </div>
    )
}
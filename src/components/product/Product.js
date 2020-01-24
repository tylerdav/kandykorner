import React from "react"
import "./Products.css"

export default ({ product }) => (
    <section className="product">
        <div className="product__product">{product.product}</div>
        <div className="product__productType">{product.productTypeId}</div>
        <div className="product__location">{product.locationId}</div>
    </section>
)
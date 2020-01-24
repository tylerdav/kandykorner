import React from "react"
import "./Products.css"

export default ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__productType">{product.productTypeId}</div>
        <div className="product__location">{product.locationId}</div>
    </section>
)
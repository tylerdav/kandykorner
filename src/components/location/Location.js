import React from "react"
import "./Locations.css"

export default ({ location }) => (
    <section className="location">
        <address className="location__address">{location.address}</address>
        <div className="location__sqft">{location.sqft} square feet</div>
        <div className="location__handicap">Handicap Accessible: {location.handicapAccessible === true ? "true" : "false"}</div>
    </section>
)
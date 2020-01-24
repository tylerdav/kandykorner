import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"

export default () => {
    const { theLocations } = useContext(LocationContext)

    return (
        <div className="locations">
        {
            theLocations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}
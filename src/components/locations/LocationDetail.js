import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocations ] = useState({})

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { locationId } = useParams();


    useEffect(() => {
        const thisLocation = locations.find(l => l.id === parseInt(locationId)) || { location: {}, customer: {} }

        setLocations(thisLocation)
    }, [locationId])

    return (
    
    <section className="location">
        <h3 className="location__name">{ location.name }</h3>
        <div className="location__address">Address: { location.address }</div>
    </section>
    )
}
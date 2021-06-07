import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocations ] = useState({ employees: [], animals: [] })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { locationId } = useParams();


    useEffect(() => {
        const thisLocation = locations.find(l => l.id === parseInt(locationId)) || { employees: [], animals: [] }

        setLocations(thisLocation)
    }, [locationId])

    return (
        <section className="location">
        <h3 className="location__name">{ location.name }</h3>
        <address className="location__address">{ location.address }</address>
        <h4>Employees</h4>
        <div className="location__employees">
            Employees who work here:
            {location.employees.map(employee =>
                <div className="location__employee__name" key={employee.id}> { employee.name } </div>
            )}
        </div>
        <h4>Current Animals</h4>
        <div className="location__animals">
            Animals staying here:
            {location.animals.map(animal =>
                <div className="location__animal__name" key={animal.id}> { animal.name } </div>
            )}
        </div>
    </section>
)
}
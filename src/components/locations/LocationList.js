import React, { useState, useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import {Link} from 'react-router-dom'
import "./Locations.css"

export const LocationList = ({ history }) => {
    const { getLocations, locations } = useContext(LocationContext)

    // Initialization effect hook -> Go get employee data
    useEffect(()=>{
        getLocations()
    }, [])

    return (
        <>
            <h1>Locations</h1>

            <button onClick={() => history.push("/locations/create")}>
              New Location
            </button>

            <div className="locations">
                {
                    locations.map(location => <Link to={`/locations/detail/${location.id}`}>
                          { location.name }
                        </Link>
                    )
                }
            </div>
        </>
    )
}
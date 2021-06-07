import React, { useState, useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory, Link } from 'react-router-dom'
import "./Locations.css"

export const LocationList = () => {
    const { getLocations, locations } = useContext(LocationContext)
    const history = useHistory()

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
              locations.map(location => 
                  <div className="location" key={location.id} id={`location--${location.id}`}>
                          <div className="location__name">
                              <Link to={`/locations/detail/${location.id}`}>
                                  { location.name }
                              </Link>
                          </div>
                          <div className="location__employees">
                              Number of Employees: { location.employees.length }
                          </div>
                          <div className="location__animals">
                              Number of Animals: { location.animals.length }
                          </div>
                  </div>
              )
          }
          </div>
      </>
  )
}
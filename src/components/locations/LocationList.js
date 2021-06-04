import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"
import { useHistory } from "react-router-dom";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])

// Invoke the useHistory() hook function
const history = useHistory();

return (
  <>
    <h2>Locations</h2>
    <button onClick={() => history.push("/locations/create")}>
      Add Location
    </button>
    <section className="locations">
      {
        locations.map(location => {
          return (
            <div className="location" id={`location--${location.id}`}>
              <div className="location__name">
                { location.name }
              </div>
              <div className="location__breed">
                { location.address }
              </div>
            </div>
          )
        })
      }
    </section>
    </>
  )
}
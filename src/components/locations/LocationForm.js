import React, { useContext, useEffect, useState } from "react";
import "./Locations.css";
import { useHistory } from "react-router-dom";
import { LocationContext } from "../locations/LocationProvider";

export const LocationForm = () => {
  const { getLocations, addLocation } = useContext(LocationContext);

  const [locations, setLocations] = useState({
    name: "",
    address: "",
  });

  const history = useHistory();

  useEffect(() => {
    getLocations();
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...locations };
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value;
    // update state
    setLocations(newLocation);
  };

  const handelClickSaveLocation = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form
    const newLocation = {
      name: locations.name,
      address: locations.address,
    };
    addLocation(newLocation).then(() => history.push("/locations"));
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Locations</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location Name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            value={locations.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location Address:</label>
          <input
            type="text"
            id="address"
            required
            autoFocus
            className="form-control"
            placeholder="Location Address"
            value={locations.address}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handelClickSaveLocation}>
        Save Location
      </button>
    </form>
  );
};

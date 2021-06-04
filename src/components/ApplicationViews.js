import React from "react";
import { Route } from "react-router-dom";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationProvider } from "./locations/LocationProvider";
import { CustomerProvider } from "./customers/CustomerProvider";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import { AnimalList } from "./animal/AnimalList";
import { LocationList } from "./locations/LocationList";
import { CustomerList } from "./customers/CustomerList";
import { EmployeeList } from "./employees/EmployeeList";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employees/EmployeeForm";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <CustomerProvider>
      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>

        {/* Render the animal list when http://localhost:3000/animals */}
        <AnimalProvider>
          <Route exact path="/animals">
            <AnimalList />
          </Route>

          <Route exact path="/animals/create">
            <AnimalForm />
          </Route>
        </AnimalProvider>
      {/* Render the customer list when http://localhost:3000/animals */}
        <Route path="/customers">
          <CustomerList />
        </Route>

      {/* Render the employee list when http://localhost:3000/animals */}
      <EmployeeProvider>
        <Route path="/employees">
          <EmployeeList />
        </Route>

        <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
      </EmployeeProvider>
      </LocationProvider>
      </CustomerProvider>
    </>
  );
};

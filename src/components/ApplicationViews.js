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
import { LocationForm } from "./locations/LocationForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employees/EmployeeDetail";
import { LocationDetail } from "./locations/LocationDetail";



export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <CustomerProvider>
        <LocationProvider>
          <Route exact path="/locations">
            <LocationList />
          </Route>

          <Route exact path="/locations/create">
            <LocationForm />
          </Route>

          <Route exact path="/locations/detail/:locationId(\d+)">
            <LocationDetail />
          </Route>

          {/* Render the animal list when http://localhost:3000/animals */}
          <AnimalProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>

            <Route exact path="/animals/detail/:animalId(\d+)">
              <AnimalDetail />
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

            <Route exact path="/employees/detail/:employeeId(\d+)">
              <EmployeeDetail />
            </Route>

          </EmployeeProvider>
        </LocationProvider>
      </CustomerProvider>
    </>
  );
};

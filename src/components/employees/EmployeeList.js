import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employees.css";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  const employeeLocation = (id) => {
      if (id === 1) {
        return "Nashville North";
      } else {
        return "Nashville South";
  }
}

  // Invoke the useHistory() hook function
  const history = useHistory();

  return (
      <>
      <h2>Employees</h2>
      <button onClick={() => history.push("/employees/create")}>
        Add Employee
      </button>
    <section className="employees">
      {employees.map((employee) => {
        return (
          <div key={employee.id} className="employee" id={`employee--${employee.id}`}>
            <div className="employee__name">{employee.name}</div>
            <div className="employee__location">{employeeLocation(employee.id)}</div>
          </div>
        );
      })}
    </section>
    </>
  );
};

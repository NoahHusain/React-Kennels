import React, { useState, useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import {Link} from 'react-router-dom'
import "./Employees.css"

export const EmployeeList = ({ history }) => {
    const { getEmployees, employees } = useContext(EmployeeContext)

    // Initialization effect hook -> Go get employee data
    useEffect(()=>{
        getEmployees()
    }, [])

    return (
        <>
            <h1>Employees</h1>

            <button onClick={() => history.push("/employees/create")}>
              New Employee
            </button>

            <div className="employees">
                {
                    employees.map(employee => <Link to={`/employees/detail/${employee.id}`}>
                          { employee.name }
                        </Link>
                    )
                }
            </div>
        </>
    )
}

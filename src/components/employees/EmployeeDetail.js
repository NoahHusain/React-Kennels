import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employees.css"
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
    const { employees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({})

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { employeeId } = useParams();


    useEffect(() => {
        const thisEmployee = employees.find(e => e.id === parseInt(employeeId)) || { location: {}, customer: {} }

        setEmployee(thisEmployee)
    }, [employeeId])

    const findLocation = () => {
        if (employee.locationId === 1 || employee.locationId === '1') {
            return 'Nashville North'
        } else { 
            return 'Nashville South'
        }
    }
    return (
    
    <section className="animal">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="animal__location">Location: { findLocation() }</div>
    </section>
    )
}
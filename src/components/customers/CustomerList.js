import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customers.css"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()
  }, [])


  return (
    <section className="customers">
      {
        customers.map(customer => {
          return (
            <div className="customer" id={`customer--${customer.id}`}>
              <div className="customer__name">
                { customer.name }
              </div>
              <div className="customer__breed">
                { customer.address }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import {useHistory, Link} from 'react-router-dom'
import "./Animal.css"

export const AnimalList = () => {
    const { getAnimals, animals } = useContext(AnimalContext)
    const history = useHistory()



    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>

            <div className="animals">
                {
                    animals.map(animal => <Link className="animal" to={`/animals/detail/${animal.id}`}>
                          { animal.name }
                        </Link>
                    )
                }
            </div>
        </>
    )
}

import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function Details() {

    const [name, setName] = useState('')
    const {pokemon} = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}
        `)
        .then(res => {
            setName(res.data.name)
        })
    }, [])

// [] is the dependency array; can put name of change to run when that state changes

    return (
        <div>
            <h1>Details</h1>
            <h2>{name}</h2>
        </div>
    )
}

export default Details
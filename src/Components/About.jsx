import React from 'react'
import {Button, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

function About() {

    const navigate = useNavigate()

    const handleClick = () => {
        alert("We are going to the details page, looking for: Mewtwo.")
        navigate('/details/Mewtwo')
    }    

    return (
        <div>
            <Typography>About Page</Typography>
            <Button onClick={handleClick}>Go to Detail Page</Button>
        </div>
    )
}

export default About
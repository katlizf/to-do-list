import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'

function Header() {
    return (
        <div>
            <header>
                <Link to='/'>
                    <Button id='link-btn'>Home</Button>
                </Link>
                <Link to='/addTask'>
                    <Button id='link-btn'>Add Task</Button>
                </Link>
                <Link to='/Team'>
                    <Button id='link-btn'>Team</Button>
                </Link>
            </header>
        </div>
    )
}

export default Header
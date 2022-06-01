import React from 'react'
import Andrew from './Andrew'
import Brady from './Brady'
import {Link, Route, Routes} from 'react-router-dom'
import {Button, Typography} from '@mui/material'

function Team() {
    return (
        <div>
            <Typography>Team Page</Typography>
            <div>
                <Link to='/team/andrew'>
                    <Button>Andrew</Button>
                </Link> 
                <Link to='/team/brady'>
                    <Button>Brady</Button>
                </Link> 
            </div>
            <Routes>
                <Route path='andrew' element={<Andrew />} />
                <Route path='brady' element={<Brady />} />
            </Routes>
        </div>
    )
}

export default Team
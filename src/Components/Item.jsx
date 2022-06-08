import React, {useState} from 'react'
import '../App.css'
import {Box, Button, Typography} from '@mui/material'

function Item({item, index, setList, list, task}) {

    const [isChecked, setIsChecked] = useState(false)

    const handleDelete = index => {
        list.splice(index, 1)
        setList([...list])
    }

    return (
        <Box 
            className='item' 
            sx={{display:'flex', flexDirection:'row', gap:2, justifyContent:'center', my:2}}>
            <Typography 
                variant='h4' 
                Click={() => setIsChecked(!isChecked)} 
                className={isChecked ? 'completed' : null}>{task.task_name}
            </Typography> 
            <Typography 
                varient='h5'>{item.category}
            </Typography>
            <Button 
                variant='contained' 
                onClick={() => handleDelete(index)}>X
            </Button>
        </Box>
  )
}

export default Item

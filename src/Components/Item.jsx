import React, {useState} from 'react'
import '../App.css'
import {Box, Button, Typography} from '@mui/material'

function Item({id, task, setList, list}) {

    const [isChecked, setIsChecked] = useState(false)

    const handleDelete = id => {
        list.splice(id, 1)
        setList([...list])
    }

    return (
        <Box 
            className='item' 
            sx={{display:'flex', flexDirection:'row', gap:2, justifyContent:'center', my:2}}>
            <Typography 
                variant='h4' 
                onClick={() => setIsChecked(!isChecked)} 
                className={isChecked ? 'ischecked' : null}>{task.task_name}
            </Typography> 
        {/* Redo strike-through ability */}
            <Typography 
                varient='h4'>{task.task_category}
            </Typography>
            <Button 
                variant='contained' 
                onClick={() => handleDelete(id)}>X
            </Button>
        </Box>
  )
}

export default Item

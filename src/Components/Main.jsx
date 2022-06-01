import React, {useState} from 'react'
import ListDisplay from './ListDisplay'
import {Box, Button, FormControl, MenuItem, Select, TextField, Typography} from '@mui/material'

function Main() {

    const [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [list, setList] = useState([])

    const handleChange = e => {
        setTask(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
console.log('Works')
        setList([...list, {task: task, category: category}])
        setTask('')
    }
console.log(list)
    return (
        <Box>
            <Typography variant='h3' sx={{textAlign:'center', my:2}}>My To-Do List</Typography>
            <FormControl sx={{display:'flex', flexDirection:'row', justifyContent:'center', gap:1, my:2}}>
                <TextField type='text' placeholder='task' onChange={handleChange} value={task}></TextField>
                <Select onChange={(e) => setCategory(e.target.value)} defaultValue='category'>
                    <MenuItem value='category'>category</MenuItem>
                    <MenuItem value='chores'>chores</MenuItem>
                    <MenuItem value='errands'>errands</MenuItem>
                    <MenuItem value='work'>work</MenuItem>
                </Select>
                <Button type='submit' variant='contained' onClick={handleSubmit}>Add</Button>
            </FormControl>
            <ListDisplay list={list} setList={setList}/>
        </Box>
    )
}

export default Main


// using type='submit' for a button allows function to run when button is clicked or they press enter. onClick only allows function to run when button is clicked

// onChange = {(e) => handleChange(e)} binds the function to the event on the specific element instance

// <ListDisplay list={list}/> passes down the prop of list to the value of the current
import React, {useEffect, useState} from 'react'
import ListDisplay from './ListDisplay'
import {Box, Button, FormControl, Select, TextField, Typography} from '@mui/material'
import {useFormik} from 'formik'
import axios from 'axios'

function Main() {

    const [allCategories, setAllCategories] = useState([])
    const [list, setList] = useState([])


    useEffect(() => {
        axios
            .get('http://localhost:4000/api/getCategories')
            .then(res => setAllCategories(res.data))
        axios
            .get('http://localhost:4000/api/getAllTasks')
            .then(res => setList(res.data))
    })

    const catOptions = allCategories.map((cat, index) => {
        return <option value={cat.category_id}>{cat.category_name}</option>
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            category: '' /*changed to '' instead of null*/
        },
        onSubmit: (values) => {
            axios
                .post('http://localhost:4000/api/addTask', values)
                .then(res => console.log(res.data))
        }
    })

    return (
        <Box>
            <Typography
                variant='h3' 
                sx={{textAlign:'center', my:2}}>My To-Do List
            </Typography>
            <FormControl
                sx={{display:'flex', flexDirection:'row', justifyContent:'center', gap:1, my:2}}>
                <TextField 
                    name='name'
                    placeholder='task' 
                    value={formik.values.name}>
                </TextField>
                <TextField 
                    name='description'
                    placeholder='description' 
                    value={formik.values.description}>
                </TextField>
                <Select 
                    name='category'
                    value={formik.values.category} 
                    onChange={formik.handleChange} defaultValue='category'>{catOptions}
                </Select>
                <Button 
                    type='submit' 
                    variant='contained' 
                    onSubmit={formik.handleSubmit}>Add
                </Button>
            </FormControl>
            <ListDisplay list={list} setList={setList}/>
        </Box>
    )
}

export default Main


// using type='submit' for a button allows function to run when button is clicked or they press enter. onClick only allows function to run when button is clicked

// onChange = {(e) => handleChange(e)} binds the function to the event on the specific element instance

// <ListDisplay list={list}/> passes down the prop of list to the value of the current
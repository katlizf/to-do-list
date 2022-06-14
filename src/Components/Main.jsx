import React, {useEffect, useState} from 'react'
import ListDisplay from './ListDisplay'
import {Box, Button, FormControl, MenuItem, Select, TextField, Typography} from '@mui/material'
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
    }, [])

    const catOptions = allCategories.map((cat, index) => {
        return <MenuItem value={cat.category_id}>{cat.category_name}</MenuItem>
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            category: null
        },
        onSubmit: (values) => {
            axios
                .post('http://localhost:4000/api/addTask', values)
                .then(res => console.log(res.data))
        }
    })

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, my: 2}}>
            <Typography
                variant='h3'
                sx={{textAlign: 'center', my: 2}}>My To-Do List
            </Typography>
            <form
                onSubmit={formik.handleSubmit}
                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2, my: 2}}>
                <TextField
                    name='name'
                    placeholder='Task'
                    value={formik.values.name}
                    onChange={formik.handleChange}>
                </TextField>
                <TextField
                    name='description'
                    placeholder='Description'
                    value={formik.values.description}
                    onChange={formik.handleChange}>
                </TextField>
                <FormControl>
                    <Select
                        name='category'
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        sx={{width: 170}}>
                            <MenuItem defaultValue disabled selected>Category</MenuItem>
                            {catOptions}
                    </Select>
                </FormControl>
                <Button
                    type='submit'
                    variant='contained'>Add
                </Button>
            </form>
            <ListDisplay list={list} setList={setList} />
        </Box>
    )
}

export default Main


// using type='submit' for a button allows function to run when button is clicked or they press enter. onClick only allows function to run when button is clicked

// onChange = {(e) => handleChange(e)} binds the function to the event on the specific element instance

// <ListDisplay list={list}/> passes down the prop of list to the value of the current
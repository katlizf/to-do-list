import React, {useState} from 'react'
import Item from './Item'
import {Box, MenuItem, Select} from '@mui/material'

function ListDisplay(props) {

    const {list, setList} = props /*have access to list as props*/
    const [selected, setSelected] = useState('')

    const listMapped = list.filter((item) => {
        if(selected) return item.category === selected
        return item}).map((item, index) => {
            return (
                <Item key={index} item={item} index={index} setList={setList} list={list} />
            )
    })


    return (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <Select 
                onChange={(e) => setSelected(e.target.value)}
                defaultValue='all' 
                sx={{width:'100px'}}>
                <MenuItem value='all'>all</MenuItem>
                <MenuItem value='chores'>chores</MenuItem>
                <MenuItem value='errands'>errands</MenuItem>
                <MenuItem value='work'>work</MenuItem>
            </Select>
            {listMapped}
        </Box>
    )
}

export default ListDisplay
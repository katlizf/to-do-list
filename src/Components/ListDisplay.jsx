import React, {useState} from 'react'
import Item from './Item'

function ListDisplay(props) {

    const {list, setList} = props /*have access to list as props*/
    const [selected, setSelected] = useState('')
console.log(list)
    const listMapped = list.filter((item) => {
        if(selected) return item.category === selected
        return item}).map((item, index) => {
            return (
                <Item key={index} item={item} index={index} setList={setList} list={list} />
            )
    })


    return (
        <div>
            <select onChange={(e) => setSelected(e.target.value)}>
                <option defaultValue selected></option>
                <option value='chores'>chores</option>
                <option value='errands'>errands</option>
                <option value='work'>work</option>
            </select>
            {listMapped}
        </div>
    )
}

export default ListDisplay
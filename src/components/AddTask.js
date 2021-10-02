import {useState} from 'react'

const AddTask = ({onAdd}) => {
const [text, setText]= useState('')
const [day, setDay]= useState('')
const [reminder, setReminder]= useState(false)
const onSubmit = (e) => {
    e.preventDefault()
    if(!text){alert('please add text')
    return}
    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)

}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' 
                placeholder='Add Task' 
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type='text' placeholder='Add Date and Time'
                value={day}
                onChange={(e)=>setDay(e.target.value)}
                />
            <div className='form-control form-control-check'>
                <label>SetReminder</label>
                <input type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)}/>

             
            </div>
            </div>
            <input className='btn btn-block' type='submit' value='Save task'/>
        </form>
    )
}
export default AddTask
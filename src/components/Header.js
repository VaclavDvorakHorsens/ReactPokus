import { ReactPropTypes } from "react"
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const addButtonText =''

    return (
        <header className='header'> 
            <h1>{props.title} </h1>
            <Button color={props.showAddTask ? 'Red' : 'Green'} text={props.showAddTask ? "Close" : "Add"} onClick={props.onAdd}/>
            
        </header>
    )
}

Header.defaultProps={title:'default'}
Header.propTypes ={title: PropTypes.string.isRequired}

const headingStyle={color:'red', backgroundColor: 'green'}

export default Header

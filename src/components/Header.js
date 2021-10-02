import { ReactPropTypes } from "react"
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const addButtonText =''

    return (
        <header className='header'> 
            <h1 style={{color:'blue'}}>{props.title} </h1>
            <Button color='green' text={props.showAddTask ? "Close" : "Add"} onClick={props.onAdd}/>
            
        </header>
    )
}

Header.defaultProps={title:'default'}
Header.propTypes ={title: PropTypes.string.isRequired}

const headingStyle={color:'red', backgroundColor: 'green'}

export default Header

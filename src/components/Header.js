import { ReactPropTypes } from "react"
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
const onClick=()=>console.log('click')

    return (
        <header className='header'> 
            <h1 style={{color:'blue'}}>{props.title} </h1>
            <Button color='green' text='Add' onClick={onClick}/>
            
        </header>
    )
}

Header.defaultProps={title:'default'}
Header.propTypes ={title: PropTypes.string.isRequired}

const headingStyle={color:'red', backgroundColor: 'green'}

export default Header

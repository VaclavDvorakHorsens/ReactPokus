import { ReactPropTypes } from "react"
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle}>{props.title}</h1>
        </header>
    )
}

Header.defaultProps={title:'default'}
Header.propTypes ={title: PropTypes.string.isRequired}

const headingStyle={color:'red'}

export default Header

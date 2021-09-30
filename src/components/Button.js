import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    //const onClick1=()=>console.log('click')


    return (
        <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
    )

}
Button.defaultProps = { color: 'red', text: 'default' }
Button.propTypes = { text: PropTypes.string, color: PropTypes.string, onClick: PropTypes.func.isRequired }

export default Button
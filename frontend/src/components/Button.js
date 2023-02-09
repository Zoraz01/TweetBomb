import PropTypes from 'prop-types'

const Button = ({colour, text,textColor,onClick}) => {
    
  return (
        <button onClick={onClick} style = {{background:colour,color: textColor}}className='btn'> {text}</button>    
  )
}

Button.defaultProps = {
    color: "steelblue",
    textColor: "white"

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
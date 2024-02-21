import './Button.css'

const Button = (props) => {
    return (
        <button  className="buton">
            {props.children}
        </button>
    )
}

export default Button 
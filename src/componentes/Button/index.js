import './Button.css'

const Button = (props) => {
    return (
        <button  className="buton">
            {props.texto}
        </button>
    )
}

export default Button 
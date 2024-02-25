import { useState } from "react";
import "./fildText.css";

const FildText = (props) => {
    //const placeholderModifiqued = `${props.placeholder}...`

    //let valuee = 'Edilson Silva'

    //const [valuee, setValuee] = useState(' Edilson Silva')

    const toTyped = (event) => {
        props.toAltered(event.target.value)
    }
    console.log(props);
    return (
        <div className="fild-text">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={toTyped} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default FildText
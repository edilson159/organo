import "./fildText.css";

const FildText = (props) => {
    console.log(props);
    return (
        <div className="fild-text">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default FildText
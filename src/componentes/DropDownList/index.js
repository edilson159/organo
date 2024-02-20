import './DropDownList.css'

const dropDownList = (props) => {
    console.log(props.itens);
    return (
        <div>
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                 })}
            </select>
        </div>
    )
}

export default dropDownList
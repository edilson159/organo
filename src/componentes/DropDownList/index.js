import './DropDownList.css'

const dropDownList = (props) => {
    console.log(props);
    return (
        <div className='list'>
            <label  >
                {props.label}
            </label>
            <select required={props.obrigatorio} >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                 })}
            </select>
        </div>
    )
}

export default dropDownList
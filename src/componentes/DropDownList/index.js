import './DropDownList.css'

const dropDownList = (props) => {
    return (
        <div className='list'>
            <label  >
                {props.label}
            </label>
            <select onChange={event => props.toAltered(event.target.value)} required={props.obrigatorio} value={props.valor} >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                 })}
            </select>
        </div>
    )
}

export default dropDownList

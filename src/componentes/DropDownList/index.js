import './DropDownList.css'

const dropDownList = (props) => {
    return (
        <div className='list'>
            <label  >
                {props.label}
            </label>
            <select >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                 })}
            </select>
        </div>
    )
}

export default dropDownList
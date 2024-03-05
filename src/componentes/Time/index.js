import CardCollaborator from "../Collaborator";
import "./Time.css";

const Time = (props, time) => {

    const color = {backgroundColor: props.secondaryColor, backgroundImage: 'url(/imagens/fundo.png'}

    const border = {borderColor: props.primaryColor}

    return (
        (props.collaborators.length > 0) ? <section className="time" style={color} >
            <input value={props.secondaryColor} onChange={event => props.changeColor(event.target.value, time.nome)} type="color" className="input-color" />
            <h3 style={border}>{props.nome}</h3>
            <div className="collaborators">
        {props.collaborators.map(Collaborator => {
            return < CardCollaborator 
            key={Collaborator.nome} 
            nome={Collaborator.nome} 
            cargo={Collaborator.cargo} 
            imagem={Collaborator.imagem} 
            toDeleted={props.toDeleted}/>
            
        })}
            </div>
        </section>
        : ''
    )
}

export default Time
import CardCollaborator from "../Collaborator";
import "./Time.css";

const Time = (props) => {

    const color = {backgroundColor: props.secondaryColor}

    const border = {borderColor: props.primaryColor}

    return (
        (props.collaborators.length > 0) ? <section className="time" style={color}>
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
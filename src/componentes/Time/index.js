import CardCollaborator from "../Collaborator";
import "./Time.css";

const Time = (props) => {

    const color = {backgroundColor: props.secondaryColor}

    const border = {borderColor: props.primaryColor}

    return (
        <section className="time" style={color}>
            <h3 style={border}>{props.nome}</h3>
            <CardCollaborator />
        </section>
    )
}

export default Time
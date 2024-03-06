import { AiFillCloseCircle } from "react-icons/ai";
import './Collaborator.css'

const CardCollaborator = (props, time, corDeFundo) => { 
    return (
        <div className='collaborator'>
            <AiFillCloseCircle size={25} className='delete' onClick={props.toDeleted} />
            <div className='header' style={{corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )

}

export default CardCollaborator 


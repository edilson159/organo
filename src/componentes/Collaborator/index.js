import './Collaborator.css'

const CardCollaborator = (props) => { 
    return (
        <div className='collaborator'>
            <div className='delete' onClick={props.toDeleted}>Deletar</div>
            <div className='header'>
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


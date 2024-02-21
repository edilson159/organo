import FildText from '../fildText'
import './form.css'
import DropDownList from '../DropDownList'
import Button from '../Button'

const form = () => {
    
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    const whenSaving = (event) => {
        event.preventDefault()
        console.log("Form foi submetido");
    }

    return (
        <section className='formC'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
               <FildText obrigatorio={true} label='Nome' placeholder='Digite o seu nome'/>
               <FildText obrigatorio={true} label='Cargo' placeholder='Digite o seu cargo'/>
               <FildText label='Imagem' placeholder='Informe o endereço da imagem'/>
               <DropDownList obrigatorio={true} label='Time' itens={times}/>
               <Button>
                Criar Card
               </Button>
            </form>
        </section>
    )
}
export default form
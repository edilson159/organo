import FildText from '../fildText'
import './form.css'
import DropDownList from '../DropDownList'

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
    
    return (
        <section className='formC'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
               <FildText label='Nome' placeholder='Digite o seu nome'/>
               <FildText label='Cargo' placeholder='Digite o seu cargo'/>
               <FildText label='Imagem' placeholder='Informe o endereço da imagem'/>
               <DropDownList label='Time' itens={times}/>
            </form>
        </section>
    )
}
export default form
import FildText from '../fildText'
import './form.css'

const form = () => {
    return (
        <section className='formC'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
               <FildText label='Nome' placeholder='Digite o seu nome'/>
               <FildText label='Cargo' placeholder='Digite o seu cargo'/>
               <FildText label='Imagem' placeholder='Informe o endereço da imagem'/>
            </form>
        </section>
    )
}
export default form
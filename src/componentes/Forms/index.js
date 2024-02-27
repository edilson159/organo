import FildText from '../fildText'
import './form.css'
import DropDownList from '../DropDownList'
import Button from '../Button'
import { useState } from 'react'


const Form = (props) => {
    

    const [nome, setNome] = useState('')

    const [cargo, setCargo] = useState('')

    const[imagem, setImagem] = useState('')

    const [time, setTime] = useState('')
    
    const whenSaving = (event) => {
        event.preventDefault()
        props.toTheRegisteredEmployee({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formC'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
               <FildText
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite o seu nome'
                valuee={nome}
                toAltered = {valuee => setNome(valuee)}
                />
               <FildText 
               obrigatorio={true} 
               label='Cargo' 
               placeholder='Digite o seu cargo'
               valuee={cargo}
               toAltered={valuee => setCargo(valuee)}
               />
               <FildText 
               label='Imagem' 
               placeholder='Informe o endereço da imagem'
               valuee={imagem}
               toAltered={valuee => setImagem(valuee)}
               />
               <DropDownList 
               obrigatorio={true} 
               label='Time' 
               itens={props.times}
               valuee={time}
               toAltered={valuee => setTime(valuee)}
               />
               <Button>
                Criar Card
               </Button>
            </form>
        </section>
    )
}
export default Form
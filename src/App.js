import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms'
import Time from './componentes/Time';
import Footer from './componentes/footer'


function App() {

  const [times, setTimes] = useState( [
    {
      nome:'Programação',
      primaryColor:'#57c278',
      secondaryColor:'#b2f5d5',
    },
    {
      nome:'Front-End',
      primaryColor:'#82CFFA',
      secondaryColor:'#E8F8FF',
    },
    {
      nome:'Data Science',
      primaryColor:'#A6D157',
      secondaryColor:'#FOF8E2',
    },
    {
      nome:'Devops',
      primaryColor:'#EO6B69',
      secondaryColor:'#FD7E8',
    },
    {
      nome:'Ux e Design',
      primaryColor:'#DB6EBF',
      secondaryColor:'#FAE9F5',
    },
    {
      nome:'Mobile',
      primaryColor:'#FFBAO5',
      secondaryColor:'#FFF5D9',
    },
    {
      nome:'Inovação e Gestão',
      primaryColor:'#FF8A29',
      secondaryColor:'#FFEEDF',
    }
  ])

  const listHome = [
    {
      nome:'Edilson Silva',
      cargo:'Desenvolvedor Junior',
      imagem:'https...',
      time: times[0].nome
    },
    {
      nome:'Enilson Silva',
      cargo:'Desenvolvedor Sênior',
      imagem:'https...',
      time: times[0].nome
    },
    {
      nome:'Eoise Kevilly',
      cargo:'Desenvolvedora Junior',
      imagem:'https',
      time: times[0].nome
    },
    {
      nome:'Bruno José',
      cargo:'Web Desgin',
      imagem:'https..',
      time: times[0].nome
    },
  ]

  const [collaborators, setCollaborators] = useState(listHome)

  const toNewCollaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator])
  }

  function deletedCollaborator () {
    console.log('Deletando colaborador')
}

  function changeColor (cor, nome,) {
    setTimes(times.map(time =>  {
      if (time.nome === nome) {
        time.primaryColor = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)} toTheRegisteredEmployee={collaborator => toNewCollaboratorAdd(collaborator)} />

      {times.map(time => <Time 
      mudarCor={changeColor}
      key={time.nome} 
      nome={time.nome} 
      primaryColor={time.primaryColor} 
      secondaryColor={time.secondaryColor}
      collaborators={collaborators.filter(collaborator => collaborator.time === time.nome)}
      toDeleted={deletedCollaborator}
      /> )}
      <Footer/>
    </div>
  );
}


export default App;

import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms'
import Time from './componentes/Time';



function App() {

  const times = [
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
  ]

  const [collaborators, setCollaborators] = useState([])

  const toNewCollaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator])
  }
  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)} toTheRegisteredEmployee={collaborator => toNewCollaboratorAdd(collaborator)} />

      {times.map(time => <Time key={time.nome} nome={time.nome} primaryColor={time.primaryColor} secondaryColor={time.secondaryColor}/> )}
      
    </div>
  );
}

export default App;

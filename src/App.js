import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms'
import Time from './componentes/Time';



function App() {
  const [collaborators, setCollaborators] = useState([])

  const toNewCollaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator])
  }
  return (
    <div className="App">
      <Banner />
      <Forms toTheRegisteredEmployee={collaborator => toNewCollaboratorAdd(collaborator)} />
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="Ux e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;

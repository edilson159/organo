import { useState } from 'react';
import Banner from './componentes/Banner';
import Forms from './componentes/Forms'



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
    </div>
  );
}

export default App;

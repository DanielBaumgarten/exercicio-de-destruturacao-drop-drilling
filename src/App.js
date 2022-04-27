import './App.css';
import Main from './pages/Main';
import Header from './components/Header'
import { createContext, useState } from 'react';

function App() {

  const UserContext = createContext({})

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const valuesProvidor = {age, setAge, name, setName}
  return (
    <UserContext.Provider value={valuesProvidor}>
      <Header 
        name={name}
      />

      <Main
        setName={setName}
        setAge={setAge}
        age={age}
        name={name}
      />
    </ UserContext.Provider>
  );
}

export default App;

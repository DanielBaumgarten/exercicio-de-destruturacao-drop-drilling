import './App.css';
import Main from './pages/Main';
import Header from './components/Header'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
<>
  <Header 
    name={name}
    age={age}
  />

  <Main
   setName={setName}
   setAge={setAge}
  />
</>
  );
}

export default App;

import './App.css';
import Main from './pages/Main';
import Header from './components/Header'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')

  return (
<>
  <Header name={name}
  />

  <Main
   setName={setName}
  />
</>
  );
}

export default App;

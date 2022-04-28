import { useState, useContext } from "react";
import './styles.css'
import UserContext from '../../contexts/UserContext';


function EditProfile() {

    const { setName, setAge } = useContext(UserContext);
    const [localName, setLocalName]= useState('');
    const [localAge, setLocalAge]= useState('');

    function handleSubmit(event){
       event.preventDefault();

       if(!localName){
           return;
       }
       if(!localAge){
           return;
       }
       
       setName(localName);
       setAge(localAge);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome
                <input
                 value={localName}
                 onChange={(event) => setLocalName(event.target.value)}
                />                
            </label>
            <label>
                Idade
                <input
                 value={localAge}
                 onChange={(event) => setLocalAge(event.target.value)}
                />                
            </label>
            <button>Editar</button>
        </form>
    )
}

export default EditProfile;
import { useState } from "react";

function EditProfile({ setName }) {

    const [localName, setLocalName]= useState('');

    function handleSubmit(event){
       event.preventDefault();

       if(!localName){
           return;
       }

       setName(localName);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome
                <input 
                 placeholder="Nome do usuário"
                 value={localName}
                 onChange={(event) => setLocalName(event.target.value)}
                />                
            </label>
            <button>Editar</button>
        </form>
    )
}

export default EditProfile;
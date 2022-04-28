import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './styles.css';

function UserProfile() {

    const { age, name } = useContext(UserContext);
    return (
        <div className="container-profile">
            <div>
                <strong>Nome:</strong>
                <span>{name}</span>
            </div>
            <div>
                <strong>Idade:</strong>
                <span>{age}</span>
            </div>
        </div>
    );
}

export default UserProfile;
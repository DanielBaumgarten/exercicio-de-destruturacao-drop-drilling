import  './styles.css';
import EditProfile from '../../components/EditProfile';

function Main({ setName }) {
    return(
        <main>
            <EditProfile 
             setName={setName}
            />
        </main>
    )
}

export default Main
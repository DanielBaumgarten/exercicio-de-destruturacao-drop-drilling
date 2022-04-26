import  './styles.css';
import EditProfile from '../../components/EditProfile';

function Main({ setName, setAge }) {
    return(
        <main>
            <div>
                <EditProfile 
                setName={setName}
                setAge={setAge}
            />
            </div>
            <div>
                PERFIL DO USUÁRIO
            </div>
        </main>
    )
}

export default Main
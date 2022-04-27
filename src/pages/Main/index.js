import  './styles.css';
import EditProfile from '../../components/EditProfile';
import UserProfile from '../../components/UserProfile';

function Main({ name, age, setName, setAge }) {
    return(
        <main>
            <div className='items-main left'>
                <EditProfile 
                setName={setName}
                setAge={setAge}
            />
            </div>
            <div className='items-main'>
                <UserProfile
                 name={name}
                 age={age}
              />
            </div>
        </main>
    );
}

export default Main
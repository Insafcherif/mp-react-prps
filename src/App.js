
import './App.css';
import { users, nameofadmin } from './data'
import ListoOfUsers from './components/ListoOfUsers';
import Avatar from '@mui/material/Avatar';


function App() {
  const handleName = (user) => { alert(user.fullname) }

  return (
    <div className="App">
      <ListoOfUsers
        users={users}
        nameofadmin={nameofadmin}
        handleName={handleName}
      >
        <div style={{marginLeft: '150px', marginTop:'20px'}}>
          <Avatar alt="name" src="https://img.freepik.com/premium-vector/family-waving-avatar-character_25030-40337.jpg" sx={{ width: 56, height: 56 }} />
        </div>
      </ListoOfUsers>
    </div>
  );
}

export default App;

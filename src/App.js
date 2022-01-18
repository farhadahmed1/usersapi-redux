import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { getUsers } from './redux/slice/usersSlice';


function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(users);
  return (
    <div className="App">
      <h2> Hello All Users {users.length}</h2>
    </div>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import UserForm from './components/users/user-form';
import UserList from './components/users/user-list';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserForm />
        <hr />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { insertAPI } from '../../state/actions/api-actions';
import './user.css';

export default function UserForm() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: ''
  });

  const handleChangeUser = (e) => {
    setUser({
      name: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(insertAPI(user));
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleFormSubmit}>
        <table border='1'>
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                <input
                  type='text'
                  value={user.name}
                  name='name'
                  onChange={handleChangeUser}
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                <button type='submit'>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

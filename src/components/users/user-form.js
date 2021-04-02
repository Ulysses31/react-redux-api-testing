import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  insertAPI,
  updateAPI
} from '../../state/actions/api-actions';
import './user.css';

export default function UserForm() {
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state) => state.apiState.selectedUser
  );
  const [user, setUser] = useState({ id: 0, name: '' });

  useEffect(() => {
    setUser(selectedUser);
  }, [selectedUser]);

  const handleChangeUser = (e) => {
    setUser({
      id: user.id,
      name: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (user.id === 0) {
      dispatch(insertAPI(user));
    } else {
      dispatch(updateAPI(user));
    }
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

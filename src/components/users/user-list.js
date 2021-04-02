import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAPI,
  fetchAPI,
  setSelectedUser
} from '../../state/actions/api-actions';
import './user.css';

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(
    (state) => state.apiState.users
  );

  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  const handleEdit = (user) => {
    dispatch(setSelectedUser(user));
  };

  const handleDelete = (id) => {
    dispatch(deleteAPI(id));
  };

  return (
    <div>
      <h2>Users</h2>
      <table border='1'>
        <thead>
          <tr>
            <th>User</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

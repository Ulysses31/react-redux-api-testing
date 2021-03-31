import axios from 'axios';

export const FETCH_API = 'FETCH_API';
export const INSERT_API = 'INSERT_API';
export const DELETE_API = 'DELETE_API';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export function fetchAPI() {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        dispatch({
          type: FETCH_API,
          payload: response.data
        });
      })
      .catch((err) => console.log(err));
  };
}

export function insertAPI(user) {
  return (dispatch) => {
    return axios
      .post(apiUrl, user)
      .then((response) => {
        console.log(response);
        dispatch({
          type: INSERT_API,
          payload: response.data
        });
      })
      .catch((err) => console.log(err));
  };
}

export function deleteAPI(id) {
  return (dispatch) => {
    return axios
      .delete(`${apiUrl}/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: DELETE_API,
          payload: id
        });
      })
      .catch((err) => console.log(err));
  };
}

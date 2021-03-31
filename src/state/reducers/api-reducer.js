import {
  DELETE_API,
  FETCH_API,
  INSERT_API
} from '../actions/api-actions';

const initialState = {
  users: [],
  selectedUser: {},
  error: {}
};

export default function apiReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_API:
      console.log('apiReducer', state, action);
      return {
        ...state,
        users: action.payload
      };
    case INSERT_API:
      console.log('apiReducer', state, action);
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case DELETE_API:
      console.log('apiReducer', state, action);
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload
        )
      };
    default:
      return state;
  }
}

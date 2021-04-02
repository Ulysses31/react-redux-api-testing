import {
  DELETE_API,
  FETCH_API,
  INSERT_API,
  UPDATE_API,
  SELECTED_USER
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
        users: action.payload,
        selectedUser: {
          id: 0,
          name: ''
        }
      };
    case INSERT_API:
      console.log('apiReducer', state, action);
      return {
        ...state,
        users: [...state.users, action.payload],
        selectedUser: {
          id: 0,
          name: ''
        }
      };
    case DELETE_API:
      console.log('apiReducer', state, action);
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload
        ),
        selectedUser: {
          id: 0,
          name: ''
        }
      };
    case UPDATE_API:
      console.log('apiReducer', state, action);
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          } else {
            return user;
          }
        }),
        selectedUser: {
          id: 0,
          name: ''
        }
      };
    case SELECTED_USER:
      console.log('apiReducer', state, action);
      return {
        ...state,
        selectedUser: action.payload
      };
    default:
      return state;
  }
}

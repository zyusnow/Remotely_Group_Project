//constants
const GET_USER = 'users/GET_USER';
const EDIT_USER = 'users/EDIT_USER';
const DELETE_USER = 'users/DELETE_USER';

//actions

const getUser = (user) => ({
  type: GET_USER,
  user
});

const editUser = (user) => ({
  type: EDIT_USER,
  user
});

const deleteUser = (user) => ({
  type: DELETE_USER,
  user
});

//thunks

export const loadUser = (userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }
    dispatch(getUser(data));
  }
};

export const editUserInfo = (user) => async (dispatch) => {

  const response = await fetch(`/api/users/edit/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }
    dispatch(editUser(data));
  }
}

export const deleteUserInfo = (user) => async (dispatch) => {

  const response = await fetch(`/api/users/delete/${user.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  if (response.ok) {
    const data = await response.json();

    if (data.errors) {
      return;
    }
    dispatch(deleteUser(data));
  }
}

//Reducer
const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_USER:
      newState = {...state};
      newState.user = action.user;
      return newState;
    case EDIT_USER:
      newState = {...state};
      newState.user = action.user;
      return newState;
    case DELETE_USER:
      newState = {...state};
      newState.user = action.user;
      return newState;
    default:
      return state;
}
}

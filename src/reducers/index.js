const INITIAL_STATE = {
  current: [],
  possible: ["Allie", "Gator", "Lizzie", "Reptar"],
};

export const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "META_SUCCESS":
      return "sriram";
    default:
      return state;
  }
};

export const orgData = (state = {}, action) => {
  switch (action.type) {
    case "META_SUCCESS":
      let newState = Object.assign({}, state);
      newState = Object.assign({}, newState, action.data);
      return newState;
    default:
      return state;
  }
};

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return true;
    default:
      return state;
  }
};

export const contacts = (state = [], action) => {
  switch (action.type) {
    case "GET_CONTACT_SUCCESS":
      return action.data;
    default:
      return state;
  }
};
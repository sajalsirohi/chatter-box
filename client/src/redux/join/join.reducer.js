import JoinActionTypes from "./join.type";

const INITIAL_STATE = {
  joiningDetails: {},
};

const joinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JoinActionTypes.JOIN_USER:
      return {
        ...state,
        joiningDetails: action.payload,
      };
    default:
      return state;
  }
};

export default joinReducer;

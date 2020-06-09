import JoinActionTypes from "./join.type";

export const joinUser = (userJoiningDetails) => ({
    type: JoinActionTypes.JOIN_USER,
    payload: userJoiningDetails
});
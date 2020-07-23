import { GET_ALL_PENDING_USER, GET_ALL_USER, GET_USER_BY_ID } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_PENDING_USER:
            return actions.payload;
        case GET_USER_BY_ID:
            return actions.payload;
        case GET_ALL_USER:
            return actions.payload;

        default:
            return state;
    }
};

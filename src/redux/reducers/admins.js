import { GET_ALL_ADMIN, GET_ADMIN_BY_ID } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_ADMIN:
            return actions.payload;
        case GET_ADMIN_BY_ID:
            return actions.payload;

        default:
            return state;
    }
};

 import { GET_ALL_HOUSE, GET_HOUSE_BY_ID } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_HOUSE:
            return actions.payload;
        case GET_HOUSE_BY_ID:
            return actions.payload;

        default:
            return state;
    }
};
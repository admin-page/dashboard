import { LOGIN } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case LOGIN:
            return state;

        default:
            return state;
    }
};

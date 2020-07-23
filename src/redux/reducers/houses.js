 
import { GET_HOUSES } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_HOUSES:
            return actions.datas;

        default:
            return state;
    }
};
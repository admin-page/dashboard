 import { GET_ALL_HOUSE, GET_HOUSE_BY_ID } from "../actions";

const initialState = {getAllHouse:[], getHouseById:{}};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_HOUSE:
            return {...state, getAllHouse: actions.payload};
        case GET_HOUSE_BY_ID:
            return {...state, getHouseById: actions.payload};

        default:
            return state;
    }
};
const GET_HOUSES = "GET_HOUSES";

const getHouses = (datas) => {
    return {
        type: GET_HOUSES,
        datas,
    };
};

const fetchHouses = () => async (dispatch) => {
    const url = "https://rumahku-com.herokuapp.com/house";

    const response = await fetch(url);
    const result = await response.json();
    dispatch(getHouses(result.data));
};

export { GET_HOUSES, getHouses, fetchHouses };
import Swal from "sweetalert2";
const url = process.env.REACT_APP_API_URL;

export const GET_ALL_HOUSE = "GET_ALL_HOUSE";
export const GET_HOUSE_BY_ID = "GET_HOUSE_BY_ID";

export const getAllHouse = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/house`, options);
    const result = await response.json();

    await dispatch({
        type: GET_ALL_HOUSE,
        payload: result.data,
    });
};

export const getHouseByID = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/house/detail/${id}`, options);
    const result = await response.json();

    dispatch({
        type: GET_HOUSE_BY_ID,
        payload: result.data,
    });
};

export const addHouse = (values, history) => async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(`${url}/house/upload`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "New House successfully Created",
            });
            dispatch(getAllHouse());
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteHouse = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${url}/house/remove/${id}`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "House is deleted",
            });
            dispatch(getAllHouse());
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateHouse = (values, id, history) => async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
        for (let key in values) {
            if (values[key] === "") {
                delete values[key];
            }
        }

        const options = {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(`${url}/house/update/${id}`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Update House is successfully",
            });
            dispatch(getAllHouse());
           
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
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

export const addHouse = (values, history) => async () => {
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

            history.goBack();
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
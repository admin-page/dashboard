import Swal from "sweetalert2";
const url = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");

export const GET_ALL_ADMIN = "GET_ALL_ADMIN";

export const getAllAdmin = () => async (dispatch) => {
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/admin`, options);
    const result = await response.json();

    dispatch({
        type: GET_ALL_ADMIN,
        payload: result.data,
    });
};

export const addAdmin = (values) => async () => {
    try {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(`${url}/admin`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "New Admin successfully Created",
            });
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

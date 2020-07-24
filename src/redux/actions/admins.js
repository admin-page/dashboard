import Swal from "sweetalert2";
const url = process.env.REACT_APP_API_URL;

export const GET_ALL_ADMIN = "GET_ALL_ADMIN";
export const GET_ADMIN_BY_ID = "GET_ADMIN_BY_ID";
export const GET_ADMIN_DASHBOARD = "GET_ADMIN_DASHBOARD";

export const getAllAdmin = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/admin`, options);
    const result = await response.json();

    await dispatch({
        type: GET_ALL_ADMIN,
        payload: result.data,
    });
};

export const getAdminByID = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/admin/${id}`, options);
    const result = await response.json();

    dispatch({
        type: GET_ADMIN_BY_ID,
        payload: result.data,
    });
};

export const addAdmin = (values, history) => async () => {
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

        const response = await fetch(`${url}/admin`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "New Admin successfully Created",
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

export const updateAdmin = (values, id, history) => async () => {
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

        const response = await fetch(`${url}/admin/${id}`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Update Admin is successfully",
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

export const deleteAdmin = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${url}/admin/${id}`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Admin is deleted",
            });

            dispatch(getAllAdmin());
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

export const getDashboard = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/admin/dashboard`, options);
    const result = await response.json();

    await dispatch({
        type: GET_ADMIN_DASHBOARD,
        payload: result.data,
    });
};

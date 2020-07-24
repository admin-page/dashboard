import Swal from "sweetalert2";

export const LOGIN = "LOGIN";
export const GET_ALL_PENDING_USER = "GET_ALL_PENDING_USER";
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
const url = process.env.REACT_APP_API_URL;

export const login = (values, history) => async () => {
    try {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(`${url}/admin/login`, options);
        const result = await response.json();

        if (response.status === 200) {
            localStorage.setItem("token", result.result);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "success",
                title: "Signed in successfully",
            });

            setTimeout(() => {
                history.push("/dashboard/admins");
            }, 3000);
        } else {
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text: result.message,
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const logout = (history) => async () => {
    Swal.fire({
        icon: "success",
        title: "Terimakasih",
    });
    localStorage.removeItem("token");
    history.push("/");
};

export const getAllUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");

        const options = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${url}/users`, options);
        const result = await response.json();

        dispatch({
            type: GET_ALL_USER,
            payload: result.data,
        });
    } catch (error) {
        console.error(error);
    }
};

export const getPendingUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");

        const options = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${url}/users/approval`, options);
        const result = await response.json();

        dispatch({
            type: GET_ALL_PENDING_USER,
            payload: result.data,
        });
    } catch (error) {
        console.error(error);
    }
};

export const updateStatusUser = (id, status) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");

        const options = {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ status: status }),
        };

        const response = await fetch(`${url}/users/${id}`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: `User with ${id} - ${status}`,
            });

            dispatch(getPendingUser());
        } else {
            Swal.fire({
                icon: "error",
                title: result.message,
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const getUserByID = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/users/${id}`, options);
    const result = await response.json();

    dispatch({
        type: GET_USER_BY_ID,
        payload: result.result,
    });
};

export const updateUser = (values, id, history) => async () => {
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

        const response = await fetch(`${url}/users/${id}`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Update User is successfully",
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

export const deleteUser = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(`${url}/users/${id}`, options);
        const result = await response.json();

        if (response.status === 200) {
            Swal.fire({
                icon: "success",
                title: `User with id: ${id} is deleted`,
            });

            dispatch(getAllUser());
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

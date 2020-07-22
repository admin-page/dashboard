import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
}));

const CustomField = (props) => {
    return (
        <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            required
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...props}
        />
    );
};

export default function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = "Required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                    )
                ) {
                    errors.email = "Invalid email address";
                }

                if (!values.password) {
                    errors.password = "Required";
                }
                return errors;
            }}
            onSubmit={(values) => {
                dispatch(login(values, history));
            }}
        >
            {({ isSubmitting }) => (
                <Form className={classes.form}>
                    <Field type="email" as={CustomField} name="email" />
                    <ErrorMessage
                        name="email"
                        component="div"
                        className={classes.error}
                    />
                    <Field type="password" as={CustomField} name="password" />
                    <ErrorMessage
                        name="password"
                        component="div"
                        className={classes.error}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

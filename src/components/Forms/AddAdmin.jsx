import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
}));

export default function AddAdmin() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const CustomField = (props) => {
        return (
            <TextField
                fullWidth
                variant="filled"
                margin="normal"
                className={classes.field}
                required
                autoFocus
                {...props}
            />
        );
    };

    return (
        <Container>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    username: "",
                    confirmPassword: "",
                }}
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
                    } else if (values.password !== values.confirmPassword) {
                        errors.confirmPassword = "Password not match";
                    } else if (values.password.length < 8) {
                        errors.password = "Minimum Password 8 Character";
                    }

                    if (!values.confirmPassword) {
                        errors.confirmPassword = "Required";
                    }

                    if (!values.username) {
                        errors.username = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(addAdmin(values, history));
                }}
            >
                {() => (
                    <Form className={classes.form}>
                        <Grid
                            container
                            justify="center"
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="email"
                                    as={CustomField}
                                    name="email"
                                    label="Email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="username"
                                    label="Username"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="password"
                                    as={CustomField}
                                    name="password"
                                    label="Password"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="password"
                                    as={CustomField}
                                    name="confirmPassword"
                                    label="Re-enter Password"
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

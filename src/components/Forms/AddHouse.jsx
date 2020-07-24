import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { addHouse } from "../../redux/actions";
import { useHistory } from "react-router-dom";

import { Container } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "20%",
        float: "right",
    },
}));

export default function AddHouse(props) {
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
                    houseTitle: "",
                    price: "",
                    location: "",
                    desc: "",
                    image_url: "",
                }}
                onSubmit={(values) => {
                    dispatch(addHouse(values, history));
                }}
            >
                {() => (
                    <Form className={classes.form}>
                        <Field
                            type="text"
                            name="houseTitle"
                            id="houseTitle"
                            label="House Name"
                            variant="outlined"
                            as={CustomField}
                            required
                        />
                        <Field
                            type="text"
                            name="price"
                            id="price"
                            label="Price"
                            variant="outlined"
                            as={CustomField}
                            required
                        />
                        <Field
                            type="text"
                            name="location"
                            id="location"
                            label="Location"
                            variant="outlined"
                            as={CustomField}
                            required
                        />
                        <Field
                            type="text"
                            name="desc"
                            id="desc"
                            label="Description"
                            variant="outlined"
                            as={CustomField}
                            required
                        />

                        <Field
                            type="text"
                            name="image_url"
                            id="image_url"
                            label="Image URL"
                            variant="outlined"
                            as={CustomField}
                            required
                        />

                        <Button
                            startIcon={<SaveIcon />}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClose
                            onClick={props.handleClose}
                        >
                            Save
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

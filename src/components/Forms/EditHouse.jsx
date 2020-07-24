import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { getHouseByID, updateHouse } from "../../redux/actions";
import { Formik, Form, Field } from "formik";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
}));

export default function EditHouse() {
    const classes = useStyles();

    const CustomField = (props) => {
        return (
            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                className={classes.field}
                {...props}
            />
        );
    };

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const houses = useSelector((state) => state.houses);
    const history = useHistory();

    const id = pathname.split("/")[4];

    useEffect(() => {
        dispatch(getHouseByID(id));
    }, [dispatch, id]);

    return (
        <Container>
            <Formik
                initialValues={{
                    houseTitle: houses.houseTitle || "",
                    price: houses.price || "",
                    location: houses.location || "",
                    desc: houses.desc || "",
                    
                }}
                enableReinitialize={true}
                onSubmit={(values) => {
                    dispatch(updateHouse(values, id , history));
                }}
            >
                {() => (
                    <Form className={classes.form}>
                        <div>
                            <h1>Edit House</h1>
                        </div>
                    
                        <Grid
                            container
                            justify="center"
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid container >
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="houseTitle"
                                    label="House Name"
                                    autoFocus
                                    required
                                />
                            </Grid>
                            <Grid container >
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="price"
                                    label="Price"
                                    required
                                />
                            </Grid>
                            <Grid container>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="location"
                                    label="Location"
                                />
                               
                            </Grid>
                            <Grid container >
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="desc"
                                    label="Description"
                                />
                            </Grid>
                            {Array.isArray(houses) && houses.map((house) => (
                            <Grid  key={house._id}  container item xs={12} md={6} lg={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() =>
                                        dispatch(updateHouse(house._id))
                                    }
                                >
                                    Update
                                </Button>
                            </Grid>
                            ))}
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
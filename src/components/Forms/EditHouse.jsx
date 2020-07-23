import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SaveIcon from '@material-ui/icons/Save';
import { Formik, Form, Field} from "formik";
import { Container, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { getHouseByID } from "../../redux/actions";
import { updateHouse } from "../../redux/actions";


const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
        
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: "20%",
        float: "right",
    }

}));

export default function EditHouse() {
    const classes = useStyles();

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
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const house = useSelector((state) => state.houses);
    const history = useHistory();

    const id = pathname.split("/")[4];
    

    useEffect(() => {
        dispatch(getHouseByID(id));
        console.log(id)
    }, [dispatch, id]);
    

    return (

        <Container>
            <Formik
                initialValues={{
                    houseTitle: house.houseTitle || "",
                    price: "",
                    location: "",
                    desc: "",
                }}
                enableReinitialize={true}
                onSubmit={(values) => {
                    dispatch(updateHouse(values, history));
                }}
            >
                {() => (
                        <Form className={classes.form}>
                        <div>
                            <h1>Edit House</h1>
                        </div>
                        <Field
                            type="text"
                            name="houseTitle"
                            id="houseTitle"
                            label="House Name"
                            variant="outlined"
                            as={CustomField}
                        />
                        <Field
                            type="text"
                            name="price"
                            id="price"
                            label="Price"
                            variant="outlined"
                            as={CustomField}
                        />
                        <Field
                            type="text"
                            name="location"
                            id="location"
                            label="Location"
                            variant="outlined"
                            as={CustomField}
                        /> 
                        <Field
                            type="text"
                            name="desc"
                            id="desc"
                            label="Description"
                            variant="outlined"
                            as={CustomField}
                        /> 
                        
                        {/* <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                         */}
                        <Button
                            startIcon={<SaveIcon />}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Save
                        </Button>
                        
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
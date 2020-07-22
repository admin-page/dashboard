import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

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

export default function AddHouse() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <h1>Add House</h1>
            </div>
            <TextField
                id="houseTitle"
                label="House Name"
                variant="outlined"
            />
            <TextField
                id="location"
                label="Address"
                variant="outlined"
            />
            <TextField
                id="desc"
                label="Description"
                variant="outlined"
            /> 
            
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
            >Save</Button>
            
        </form>
    );
}
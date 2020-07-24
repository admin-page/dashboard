import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import FormAddHouse from "../Forms/AddHouse";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        width: "100%",
    },
}));

export default function AddHouse() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Fragment>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                className={classes.button}
                startIcon={<AddIcon />}
            >
                Add
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add House</DialogTitle>
                <DialogContent>
                    <FormAddHouse handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}

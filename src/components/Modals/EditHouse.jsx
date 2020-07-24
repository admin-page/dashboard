import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import FormEditHouse from "../Forms/EditHouse";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function EditHouse(props) {
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
                size="small"
                variant="contained"
                color="primary"
                onClick={handleOpen}
                className={classes.button}
                startIcon={<EditIcon />}
            >
                Edit
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit House</DialogTitle>
                <DialogContent>
                    <FormEditHouse id={props.id} handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}

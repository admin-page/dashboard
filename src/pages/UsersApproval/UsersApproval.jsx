import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { getPendingUser, updateStatusUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
    },
}));

export default function Admin() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getPendingUser());
    }, [dispatch]);

    return (
        <Fragment>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid>
                        <h1>List Approval User</h1>
                    </Grid>
                </Grid>
            </Container>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Fullname</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Created By</TableCell>
                            <TableCell align="right">Created At</TableCell>
                            <TableCell align="right">Updated At</TableCell>
                            <TableCell align="right">Updated By</TableCell>
                            <TableCell align="right">Approved By</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(users) &&
                            users.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row.fullname}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.email}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.phone}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.address}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.status}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.createdBy}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.createdAt}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.updatedAt}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.updatedBy}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.approvedBy}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            startIcon={<EditIcon />}
                                            onClick={() =>
                                                dispatch(
                                                    updateStatusUser(
                                                        row._id,
                                                        "ACTIVE"
                                                    )
                                                )
                                            }
                                        >
                                            Approve
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={() =>
                                                dispatch(
                                                    updateStatusUser(
                                                        row._id,
                                                        "REJECTED"
                                                    )
                                                )
                                            }
                                        >
                                            Reject
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

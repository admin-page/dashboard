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
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { getAllAdmin, deleteAdmin } from "../../redux/actions";
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
    const admins = useSelector((state) => state.admins);

    useEffect(() => {
        dispatch(getAllAdmin());
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
                        <h1>List Admin</h1>
                    </Grid>
                    <Grid>
                        <Link
                            to="/dashboard/admins/create"
                            className={classes.link}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                startIcon={<AddIcon />}
                            >
                                Add
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Created By</TableCell>
                            <TableCell align="right">Created At</TableCell>
                            <TableCell align="right">Updated At</TableCell>
                            <TableCell align="right">Updated By</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(admins) &&
                            admins.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row.username}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.email}
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
                                        <Link
                                            to={`/dashboard/admins/edit/${row._id}`}
                                            className={classes.link}
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.button}
                                                startIcon={<EditIcon />}
                                            >
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={() =>
                                                dispatch(deleteAdmin(row._id))
                                            }
                                        >
                                            Delete
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

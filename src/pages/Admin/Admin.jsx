import React, { Fragment } from "react";
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
import { ModalAddAdmin } from "../../components";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Admin() {
    const classes = useStyles();

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
                        <ModalAddAdmin />
                    </Grid>
                </Grid>
            </Container>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">
                                Protein&nbsp;(g)
                            </TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                    {row.protein}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<EditIcon />}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
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

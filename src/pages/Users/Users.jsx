import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, deleteUser } from "../../redux/actions";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        padding: "50%", // 16:9
        borderRadius: "50%",
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    link: {
        textDecoration: "none",
    },
}));

export default function Users() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    return (
        <React.Fragment>
            <main>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid>
                            <h1>List Users</h1>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Grid container spacing={4}>
                        {Array.isArray(users) &&
                            users.map((user) => (
                                <Grid item key={user._id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={user.avatar}
                                                title={user.fullname}
                                            />
                                        </CardContent>
                                        <CardContent
                                            className={classes.cardContent}
                                        >
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
                                                {user.fullname}
                                            </Typography>
                                            <Typography>
                                                Email : {user.email}
                                            </Typography>
                                            <Typography>
                                                Phone : {user.phone}
                                            </Typography>
                                            <Typography>
                                                Address : {user.address}
                                            </Typography>
                                            <Typography>
                                                Status : {user.status}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link
                                                to={`/dashboard/users/edit/${user._id}`}
                                                className={classes.link}
                                            >
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color="primary"
                                                >
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                color="secondary"
                                                onClick={() =>
                                                    dispatch(
                                                        deleteUser(user._id)
                                                    )
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

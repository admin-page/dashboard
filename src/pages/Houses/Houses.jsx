import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DeleteIcon from "@material-ui/icons/Delete";
import { ModalAddHouse, ModalEditHouse } from "../../components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { getAllHouse, } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';


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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    margin: '5%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Houses() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);

  useEffect(() => {
      dispatch(getAllHouse());
  }, [dispatch]);


  return (
    <React.Fragment>
      <main>
      <Container >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid>
                        <h1>List Houses</h1>
                    </Grid>
                    <Grid>
                        <ModalAddHouse />
                    </Grid>
                </Grid>
        </Container>
        <Container >
          {/* End hero unit */}
          <Grid container spacing={4} >
            {
            Array.isArray(houses) && houses.map((house) => (
              <Grid item key={house._id} xs={12} sm={6} md={4}>
                <Card className={classes.mo}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} >
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <ExpandMoreIcon />
                    </IconButton>
                    }
                    title="Admin"
                    subheader="July 21, 2020"
                />
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h4" component="h2">
                      {house.houseTitle}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      <AccountBalanceWalletTwoToneIcon color="primary"/> {house.price}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      <LocationOnTwoToneIcon color="primary"/> {house.location}
                    </Typography>
                    <Typography>
                      {house.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ModalEditHouse/>
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
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
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar2.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtile: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zindex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainter}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Raynaldo" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Raynaldo Sutisna"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtile} variant="h5">
        <Typed
          strings={["Web Developer", "Problem Solver", "Learner"]}
          typeSpeed={40}
          backspeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;

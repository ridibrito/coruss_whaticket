import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    flex: 1,
    padding: theme.spacing(2),
    height: `calc(100% - 48px)`,
    textTransform: "none",
    fontFamily: "inter"
  },

  contentWrapper: {
    height: "100%",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "column",
    textTransform: "none",
    fontFamily: "inter"
  }
}));

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <div className={classes.contentWrapper}>{children}</div>
    </Container>
  );
};

export default MainContainer;

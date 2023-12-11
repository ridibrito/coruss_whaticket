import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logo.png";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "url(equipe.jpg)",
    backgroundRepeat: "no-repeat",
    position:"fixed",
    marginLeft: "300px",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "row",
    fontFamily: "inter"
   
   
  },
  paper: {
    backgroundColor: theme.palette.login,
    width:"30vw",
    height:"100vh",
    position:"fixed",
    left:0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    padding: "55px 30px",
    borderRadius: "12.5px",
    maxWidth:"500px",
    fontFamily: "inter"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    maxWidth:"350px",
    fontFamily: "inter"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    maxWidth:"350px",
    fontFamily: "inter"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "capitalize",
    fontWeight:"normal",
    padding: "10px 20px",
    borderRadius:"8px",
    backgroundColor:"#0055DB",
    fontFamily: "inter"

    
  },
  powered: {
    color: "white",
    fontFamily: "inter"
  },
}));

const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });

  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div>
            <img
              style={{ margin: "0 auto", width: "100%", maxWidth:"300px" }}
              src={logo}
              alt="logo"
            />
          </div>
          
          <form className={classes.form} noValidate onSubmit={handlSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={i18n.t("login.form.email")}
              name="email"
              value={user.email}
              onChange={handleChangeInput}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={i18n.t("login.form.password")}
              type="password"
              id="password"
              value={user.password}
              onChange={handleChangeInput}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {i18n.t("login.buttons.submit")}
            </Button>
           
            {
              <Grid container>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    component={RouterLink}
                    to="/signup"
                  >
                    {i18n.t("login.buttons.register")}
                  </Link>
                </Grid>
              </Grid>
            }
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;

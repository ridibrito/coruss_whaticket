import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { CircularProgress, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	button: {
		position: "relative",
		textTransform: "capitalize",
    fontWeight:"normal",
    padding: "10px 20px",
    borderRadius:"8px",
    backgroundColor:"#0055DB",
    fontFamily: "inter"
	},

	buttonProgress: {
		color: green[500],
		position: "absolute",
		top: "50%",
		left: "50%",
		marginTop: -12,
		marginLeft: -12,
	},
}));

const ButtonWithSpinner = ({ loading, children, ...rest }) => {
	const classes = useStyles();

	return (
		<Button className={classes.button} disabled={loading} {...rest}>
			{children}
			{loading && (
				<CircularProgress size={24} className={classes.buttonProgress} />
			)}
		</Button>
	);
};

export default ButtonWithSpinner;

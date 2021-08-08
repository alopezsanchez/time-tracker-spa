import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";
import { Fab, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: "20px",
    right: "20px"
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

const CreateInputButton = () => {
  const classes = useStyles();

  return (
    <Link to="/input">
      <Fab color="primary" variant="extended" className={classes.root}>
        <Add className={classes.icon} />
        <Typography>Input hours</Typography>
      </Fab>
    </Link>
  );
};

CreateInputButton.displayName = "CreateInputButton";

export default CreateInputButton;

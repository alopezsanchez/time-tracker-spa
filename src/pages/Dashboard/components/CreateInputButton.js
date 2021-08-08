import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const CreateInputButton = () => {
  const classes = useStyles();

  return (
    <Link to="/input">
      <Fab color="primary" variant="extended" className={classes.root}>
        <AddIcon className={classes.icon} />
        <Typography>Input hours</Typography>
      </Fab>
    </Link>
  );
};

CreateInputButton.displayName = "CreateInputButton";

export default CreateInputButton;

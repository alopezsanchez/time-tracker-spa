import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
    display: "inline-block",
  },

  buttonProgress: {
    color: purple,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const LoadingButton = ({ loading, success, type }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        type={type}
        variant="contained"
        color="primary"
        disabled={loading}
      >
        Submit
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

LoadingButton.displayName = "LoadingButton";
LoadingButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default LoadingButton;

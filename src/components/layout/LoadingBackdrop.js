import PropTypes from "prop-types";
import Backdrop from "@material-ui/core/Backdrop";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  backdrop: {
    color: "#fff",
  },
}));

const LoadingBackdrop = ({ loading }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress />
    </Backdrop>
  );
};

LoadingBackdrop.displayName = "LoadingBackdrop";
LoadingBackdrop.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default LoadingBackdrop;

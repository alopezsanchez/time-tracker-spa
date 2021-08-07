import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Notification = ({ message, opened, onClose, severity }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={opened}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <MuiAlert elevation={6} variant="filled" severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

Notification.displayName = "Notification";
Notification.propTypes = {
  message: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default Notification;

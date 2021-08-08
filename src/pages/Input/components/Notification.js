import PropTypes from "prop-types";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

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
      <Alert elevation={6} variant="filled" severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

Notification.displayName = "Notification";
Notification.propTypes = {
  message: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default Notification;

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack } from "@material-ui/icons";

const GoBackButton = ({ history }) => {
  return (
    <IconButton
      style={{ color: "white" }}
      aria-label="delete"
      onClick={() => history.goBack()}
    >
      <ArrowBack />
    </IconButton>
  );
};

GoBackButton.displayName = "GoBackButton";
GoBackButton.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(GoBackButton);

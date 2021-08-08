import PropTypes from "prop-types";
import { Autocomplete } from "@material-ui/lab";
import { TextField, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    minWidth: "30%",
  },
}));

const SearchUser = ({ users, handleChange, loading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        options={users}
        getOptionLabel={(option) => `${option.name} (${option.username})`}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Select an user" />
        )}
      />
      {loading && <LinearProgress />}
    </div>
  );
};

SearchUser.displayName = "SearchUser";
SearchUser.propTypes = {
  users: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchUser;

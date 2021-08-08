import PropTypes from "prop-types";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";

const SearchUser = ({ users, handleChange, loading }) => {
  return (
    <div>
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

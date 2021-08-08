import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GoBackButton from "./GoBackButton";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const TopBar = () => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/dashboard" ? <GoBackButton /> : null}
          <Link className={classes.link} to="/">
            <Typography variant="h6" className={classes.title}>
              Time Tracking
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.displayName = "TopBar";

export default TopBar;

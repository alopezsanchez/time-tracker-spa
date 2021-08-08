import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    minHeight: 100,
    flex: "1 1 auto",
    marginRight: "20px",
  },
  value: {
    fontSize: 24,
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

const CustomCard = ({ value, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textPrimary" className={classes.value}>
          {value}
        </Typography>

        <Typography color="textSecondary" className={classes.title}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

CustomCard.displayName = "CustomCard";
CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CustomCard;

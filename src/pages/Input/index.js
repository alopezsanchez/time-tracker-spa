import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchUsers } from "../../services/api";
import Form from "./components/Form";

const useStyles = makeStyles(() => ({
  root: {
    padding: "3rem",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "30em",
  },
}));

export default function InputPage() {
  const [users, setUsers] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        enqueueSnackbar("Error fetching users. Please, try again later", {
          variant: "error",
        });
      }
    };

    fetchData();
  }, [enqueueSnackbar]);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Input working hours
        </Typography>
        <Form users={users} />
      </Paper>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchUsers, fetchInputsByUser } from "../../services/api";
import LoadingBackdrop from "../../components/layout/LoadingBackdrop";
import calculateOvertimeHours from "../../utils/calculateOvertimeHours";
import calculateOvertimeAveragePerDay from "../../utils/calculateOvertimeAveragePerDay";
import CustomCard from "./components/CustomCard";
import SearchUser from "./components/SearchUser";
import WorkingHoursPerDayChart from "./components/WorkingHoursPerDayChart";
import CreateInputButton from "./components/CreateInputButton";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem"
  },
  informationContainer: {
    marginTop: "3rem",
    display: "block",
    width: "100%"
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "3rem"
  },
  chartsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingInputs, setLoadingInputs] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [showInformation, setShowInformation] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoadingUsers(true);
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        enqueueSnackbar("Error fetching users. Please, try again later", {
          variant: "error"
        });
      } finally {
        setLoadingUsers(false);
      }
    }

    fetchData();
  }, [enqueueSnackbar]);

  const handleUserChange = async (event, user) => {
    try {
      if (user) {
        setActiveUser(user);
        setShowInformation(false);
        setLoadingInputs(true);

        const fetchedInputs = await fetchInputsByUser(user._id);

        setInputs(fetchedInputs);
        setShowInformation(true);
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Error fetching the user information. Please, try again later", { variant: "error" });
    } finally {
      setLoadingInputs(false);
    }
  };

  if (loadingUsers) {
    return <LoadingBackdrop loading={loadingUsers} />;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        See what's happening with your employees
      </Typography>
      <SearchUser users={users} handleChange={handleUserChange} loading={loadingInputs} />
      {showInformation && activeUser && inputs && (
        <div className={classes.informationContainer}>
          <div className={classes.cardsContainer}>
            <CustomCard value={calculateOvertimeHours(inputs)} title="Overtime hours" />
            <CustomCard value={calculateOvertimeAveragePerDay(inputs)} title="Average overtime hours per day" />
          </div>
          <div className={classes.chartsContainer}>
            <WorkingHoursPerDayChart inputs={inputs} />
          </div>
        </div>
      )}
      <CreateInputButton />
    </div>
  );
};

export default DashboardPage;

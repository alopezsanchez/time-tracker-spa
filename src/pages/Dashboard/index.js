import { useEffect, useState } from "react";
import { fetchUsers, fetchInputsByUser } from "../../services/api";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LoadingBackdrop from "../../components/layout/LoadingBackdrop";
import calculateOvertimeHours from "../../utils/calculateOvertimeHours";
import calculateOvertimeAveragePerDay from "../../utils/calculateOvertimeAveragePerDay";
import CustomCard from "./components/CustomCard";
import SearchUser from "./components/SearchUser";
import WorkingHoursPerDayChart from "./components/WorkingHoursPerDayChart";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "auto",
    gridAutoFlow: "column",
    gridGap: "10px",
    alignItems: "start",
  },
  chartsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingInputs, setLoadingInputs] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [showInformation, setShowInformation] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoadingUsers(true);
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingUsers(false);
      }
    }

    fetchData();
  }, []);

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
    } finally {
      setLoadingInputs(false);
    }
  };

  if (loadingUsers) {
    return <LoadingBackdrop loading={loadingUsers} />;
  }

  return (
    <div>
      <Typography variant="h5">
        See what's happening with your employees
      </Typography>
      <SearchUser
        users={users}
        handleChange={handleUserChange}
        loading={loadingInputs}
      />
      {showInformation && activeUser && inputs && (
        <div>
          <div className={classes.cardsContainer}>
            <CustomCard
              value={calculateOvertimeHours(inputs)}
              title="Overtime hours"
            />
            <CustomCard
              value={calculateOvertimeAveragePerDay(inputs)}
              title="Average overtime hours per day"
            />
          </div>
          <div className={classes.chartsContainer}>
            <WorkingHoursPerDayChart inputs={inputs} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;

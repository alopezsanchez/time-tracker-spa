import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import millisecondsToHours from "../../../utils/millisecondsToHours";

const useStyles = makeStyles((theme) => ({
  chartContainer: {
    maxWidth: "1200px",
  },
}));

const WorkingHoursPerDayChart = ({ inputs }) => {
  const classes = useStyles();

  const options = {
    grouped: true,
    responsive: true,
  };

  const data = {
    labels: inputs.map((input) => new Date(input.startAt).toDateString()),
    datasets: [
      {
        label: "Working Hours",
        data: inputs.map((input) =>
          millisecondsToHours(+new Date(input.endAt) - +new Date(input.startAt))
        ),
        backgroundColor: "#8561c5",
      },
      {
        label: "Overtime Hours",
        data: inputs.map((input) => millisecondsToHours(input.overtime)),
        backgroundColor: "#ff1744",
      },
    ],
  };

  return (
    <div className={classes.chartContainer}>
      <Bar width="1200" height="600" data={data} options={options} />
    </div>
  );
};

WorkingHoursPerDayChart.displayName = "WorkingHoursPerDayChart";
WorkingHoursPerDayChart.propTypes = {
  inputs: PropTypes.array.isRequired,
};

export default WorkingHoursPerDayChart;

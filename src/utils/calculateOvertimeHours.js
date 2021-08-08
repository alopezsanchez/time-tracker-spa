import millisecondsToHours from "./millisecondsToHours";

export default function calculateOvertimeHours(inputs) {
  const totalOvertime = inputs.reduce((acc, input) => acc + input.overtime, 0);
  return millisecondsToHours(totalOvertime);
}

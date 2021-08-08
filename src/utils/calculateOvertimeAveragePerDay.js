import calculateOvertimeHours from "./calculateOvertimeHours";

export default function calculateOvertimeAveragePerDay(inputs) {
  const totalOvertime = calculateOvertimeHours(inputs);
  return Math.round(totalOvertime / inputs.length);
}

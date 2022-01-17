import { StatisticsList, StatisticsListItem } from "./Statistics.style";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>
      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
      <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      <StatisticsListItem>Total: {total}</StatisticsListItem>
      <StatisticsListItem>
        Positive feedback: {positivePercentage}%
      </StatisticsListItem>
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

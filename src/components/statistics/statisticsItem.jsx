import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsList.styled';

export const Statistics = ({ statistic: { label, percentage } }) => {
  return (
      <>
         <StatisticsItem>    
        <span className="label"> {label} </span>
        <span className="percentage"> {percentage}% </span>
      </StatisticsItem>
      </>
      )
};

Statistics.propTypes = {
  statistic: PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  }).isRequired,
};

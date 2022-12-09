import PropTypes from 'prop-types';
import { Item } from './StatisticsItem.styled';

export const StatisticsItem = ({ statistic: { label, percentage } }) => {
  return (
    <>
      <Item>    
        <span> {label} </span>
        <span> {percentage}% </span>
      </Item>
    </>
      )
};

StatisticsItem.propTypes = {
  statistic: PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  }).isRequired,
};

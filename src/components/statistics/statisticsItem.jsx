import PropTypes from 'prop-types';

export const Statistics = ({ statistic: { label, percentage } }) => {
    return (
    <>    
       <span className="label"> {label} </span>
       <span className="percentage"> {percentage}% </span>
    </>
      )
};

Statistics.propTypes = {
  statistic: PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
  }).isRequired,
};

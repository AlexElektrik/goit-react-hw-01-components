import PropTypes from 'prop-types';
import { Statistics } from './statisticsItem';

export const StatisticsList = ({ statistics }) => {
 return (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {statistics.map( statistic => (
          <li  className="item" key={statistic.id}>
            {<Statistics statistic = {statistic} />}
          </li>
        ))}
      </ul>
    </section>
    )
};

StatisticsList.propTypes = {
  statistics: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
  ).isRequired,
};
import { Container } from 'components/User/User.styled';
import { Statistics } from './StatisticsItem';
import PropTypes from 'prop-types';
import { StatList, StatisticsTitle } from './StatisticsList.styled';


export const StatisticsList = ({ statistics }) => {
  return (
   <Container>
    <section className="statistics">
    <StatisticsTitle className="title">Upload stats</StatisticsTitle>
      <StatList className="stat-list">
        {statistics.map( statistic => (
          <li  className="item" key={statistic.id}>
            <Statistics statistic = {statistic} />
          </li>
        ))}
      </StatList>
      </section>
    </Container>
    )
};

StatisticsList.propTypes = {
  statistics: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
  ).isRequired,
};
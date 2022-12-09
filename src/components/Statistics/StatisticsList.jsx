import { Container } from 'components/User/User.styled';
import { StatisticsItem } from './StatistigItem/StatisticsItem';
import PropTypes from 'prop-types';
import { StatisticsTitle, StatList } from './StatisticsList.styled';

export const StatisticsList = ({ title, statistics }) => {
  return (
    <Container>
      <section>
        {title && <StatisticsTitle> {title} </StatisticsTitle>}
        <StatList>
          {statistics.map(statistic => (
            <StatisticsItem key={statistic.id} statistic={statistic} />
          ))}
        </StatList>
      </section>
    </Container>
  );
};

StatisticsList.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

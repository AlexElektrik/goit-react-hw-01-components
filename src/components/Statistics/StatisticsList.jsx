import { Container } from 'components/User/User.styled';
import { Statistics } from './StatistigItem/StatisticsItem';
import PropTypes from 'prop-types';
import {StatisticsTitle, StatList, Item } from './StatisticsList.styled';


export const StatisticsList = ({title, statistics }) => {
  return (
   <Container>
      <section className="statistics">
        {title && (<StatisticsTitle>  {title} </StatisticsTitle>)}
      <StatList className="stat-list">
        {statistics.map( statistic => (
          <Item  className="{statistic.id}" key={statistic.id}>
            <Statistics statistic = {statistic} />
          </Item>
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
  title: PropTypes.string,  
};
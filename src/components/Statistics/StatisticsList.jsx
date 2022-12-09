import { Container } from 'components/User/User.styled';
import { StatisticsItem } from './StatistigItem/StatisticsItem';
import PropTypes from 'prop-types';
import {StatisticsTitle, StatList, Item } from './StatisticsList.styled';


export const StatisticsList = ({title, statistics }) => {
  return (
   <Container>
      <section>
        {title && (<StatisticsTitle>  {title} </StatisticsTitle>)}
      <StatList>
        {statistics.map( statistic => (
          <Item  statisticId="{statistic.id}" key={statistic.id}>
            <StatisticsItem statistic = {statistic} />
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
import PropTypes from 'prop-types';
import randomColor from './../../data/colorRandom'
import {WrapperSection, List, Item, Title} from './Statistics.styled'
const Statistics = ({ title, stats}) => {
  return (
    <WrapperSection className="statistics">
      {title && <Title className="title">{title}</Title>}

      <List className="stat-list">
        {stats.map(stat => {
          return <Item key={stat.id} style={{backgroundColor:randomColor()}} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </Item>;
        })}
      </List>
    </WrapperSection>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
    }))
}

export default Statistics;

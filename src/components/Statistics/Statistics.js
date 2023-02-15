import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Title,
  StatList,
  StatItem,
  Label,
  Parcentage,
} from './Staticics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <StatItem
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{item.label}</Label>
            <Parcentage>{item.percentage}%</Parcentage>
          </StatItem>
        ))}
      </StatList>
    </SectionStatistics>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

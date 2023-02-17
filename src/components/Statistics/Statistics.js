import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Title,
  StatList,
  StatItem,
  Label,
  Parcentage,
} from './Staticics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} >
            <Label>{label}</Label>
            <Parcentage>{percentage}%</Parcentage>
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

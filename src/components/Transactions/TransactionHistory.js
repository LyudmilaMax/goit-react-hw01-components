import PropTypes from 'prop-types';
import {
  TableTransaction,
  Thead,
  CaptionTransaction,
  Body,
  Line,
  Cell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <Thead>
        <tr>
          <CaptionTransaction>Type</CaptionTransaction>
          <CaptionTransaction>Amount</CaptionTransaction>
          <CaptionTransaction>Currency</CaptionTransaction>
        </tr>
      </Thead>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <Line key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Line>
        ))}
      </Body>
    </TableTransaction>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

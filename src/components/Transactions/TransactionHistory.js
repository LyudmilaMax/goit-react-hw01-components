import PropTypes from 'prop-types';
import {
  TableTransaction,
  CaptionTransaction,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <thead>
        <tr>
          <CaptionTransaction>Type</CaptionTransaction>
          <CaptionTransaction>Amount</CaptionTransaction>
          <CaptionTransaction>Currency</CaptionTransaction>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
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

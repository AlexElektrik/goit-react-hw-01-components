import PropTypes from 'prop-types';
import { Transaction } from "./transactionItem";

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key = { item.id }>
              <Transaction data = { item }/>     
            </tr>
        ))}    
        </tbody>
      </table>
    </>
    )
};

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
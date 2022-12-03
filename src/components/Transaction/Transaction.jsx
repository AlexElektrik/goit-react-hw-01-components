import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { Transaction } from "./TransactionItem/TransactionItem";
import { Container } from 'components/User/User.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table className="transaction-history">
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
      </Table>
    </Container>
    )
};

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
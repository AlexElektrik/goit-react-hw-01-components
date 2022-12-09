import PropTypes from "prop-types";
import { Table } from "./TransactionHistory.styled";
import { TransactionItem } from "./TransactionItem/TransactionItem";
import { Container } from "components/User/User.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Type</th> 
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <TransactionItem data={item} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

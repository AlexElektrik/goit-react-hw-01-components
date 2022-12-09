import PropTypes from "prop-types";

export const TransactionItem = ({ data: { type, amount, currency } }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionItem.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }),
};

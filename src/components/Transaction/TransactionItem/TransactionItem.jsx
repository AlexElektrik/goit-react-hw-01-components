import PropTypes from 'prop-types';

export const Transaction = ({data: {type, amount, currency}}) => {
  return(
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  )
};

Transaction.propType = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })
}


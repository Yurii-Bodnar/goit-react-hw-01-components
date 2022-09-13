import PropTypes, { objectOf } from 'prop-types';
import {Information, Table, TableTitle} from './TransactionHistory.syled'
const TransactionHistory = ({items}) => {
    return ( <Table className="transaction-history">
    <thead>
      <tr>
        <TableTitle>Type</TableTitle>
        <TableTitle>Amount</TableTitle>
        <TableTitle>Currency</TableTitle>
      </tr>
    </thead>
  
    {items.map(({id,type,amount,currency})=>{
        return <tbody key={id}>
        <tr>
          <Information>{type}</Information>
          <Information>{amount}</Information>
          <Information>{currency}</Information>
        </tr>
      </tbody>
    })}
  </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(objectOf(PropTypes.string))
}

export default TransactionHistory;
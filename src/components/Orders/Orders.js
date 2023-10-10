import { useState } from 'react';
import AddButton from '../AddButton/AddButton';
import CureentOrder from '../CurrentOrder/CurrentOrder';
import './orders.scss';
import OrderList from '../OrderLIst/OrderList';

const Orders = () => {
  const [data, setData] = useState( [
    { id: 1, title: 'Really long title for order Really long title for order', date: '2011-07-29', price: 1400, count: 15, description: 'desc' },
    { id: 2, title: 'Order 1', date: '2017-06-29', price: 20, count: 10, description: 'desc' },
    { id: 3, title: 'Really long title for order Really long title for orderReally long title for order Really long title for order', date: '2017-12-29', price: 100, count: 25, description: 'desc' },
  ]);

  return (
    <div className='orders' data-testid="main-page">
      <div className='orders__header'>
        <AddButton />
        <h1>Orders / 25</h1>
			</div>
      <div className='orders__body'>
        <OrderList data={data}/>
        <div className='orders__body--products'>
          {/* <CureentOrder /> */}
        </div>
			</div>
    </div>
  );
};

export default Orders;
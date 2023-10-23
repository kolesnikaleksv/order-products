import { useEffect, useState } from 'react';
import AddButton from '../AddButton/AddButton';
import CureentOrder from '../CurrentOrder/CurrentOrder';
import OrderList from '../OrderLIst/OrderList';
import useDataService from '../sevices/DataService';

import './orders.scss';

const Orders = () => {
  const [selectedOrder ,setSelectedOrder] = useState(null);
  const [className, setClassName] = useState('');
  const [activeOrder, setActiveOrder] = useState('');
  const [orderList, setOrderList] = useState([]);
  const [orderChanged, setOrderChanged] = useState(false);
  const [ordersData, setOrdersData] = useState([]);

  const {fetchData, deleteData} = useDataService();

  
  useEffect(() => {
    fetchData('http://localhost:4000/orders')
      .then(data => {
        setOrdersData(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },[orderChanged]);
  
  useEffect(() => {
    setOrderList(ordersData);
  }, [ordersData]);

  const handleOpenOrder = (order) => {
    setOrderList(ordersData)
    setSelectedOrder(order);
    setClassName('half-screen');
    ordersData.forEach(elem => elem.id === order.id ? setActiveOrder(elem.active = true): setActiveOrder(elem.active = false))
  };

  const handleCloseOrder = () => {
    setSelectedOrder(null);
    setClassName('');
    ordersData.forEach(elem => setActiveOrder(elem.active = false)) 
  };

  const deleteOrder = (id) => {
    deleteData(id);
    setOrderChanged(!orderChanged);
  }

  return (
    <div className='orders' data-testid="main-page">
      <div className='orders__header'>
        <AddButton />
        <h1>Orders / 25</h1>
			</div>
      <div className='orders__body'>
        <OrderList onDelete={deleteOrder} onOpen={handleOpenOrder} className={className} data={orderList}/>
        {
          className ?
            <div className='orders__body--products'>
              <CureentOrder order={selectedOrder} onClose={handleCloseOrder} />
            </div>
            : null
        }
			</div>
    </div>
  );
};

export default Orders;
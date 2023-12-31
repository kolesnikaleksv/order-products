import { useEffect, useState } from "react";
import OrderItem from "../OrderItem/OrderItem";
import useDataService from "../sevices/DataService";

const OrderList = (props) => {

  const [products, setProducts] = useState([]);
  const {fetchData} = useDataService();


  useEffect(() => {
    fetchData('http://localhost:5000/products')
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error:', error);
      });
  },[])

  useEffect(() => {

  },[products])
  
  const {data, className, onOpen, onPopup} = props;

  const item = data.map(item => {
    const {id} = item;
    const list = products.filter(item => item.order === id);
    const usd = list.map(item => item.price[0].value).reduce((a, b) => a + b, 0);
    const uah = list.map(item => item.price[1].value).reduce((a, b) => a + b, 0);
    
    return (
      <OrderItem 
        key={id}
        {...item}
        onOpen={onOpen}
        className={className}
        sumUah={uah}
        sumUsd={usd}
        count={list.length}
        onPopup={onPopup}
      />
    )
  });

  return (
    <div className='orders__body--items' style={className ? {width: '35%'}: {width: '100%'}}>
      {item}
    </div>
  )
}

export default OrderList;
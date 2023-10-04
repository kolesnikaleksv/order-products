import OrderItem from "../OrderItem/OrderItem";

const OrderList = ({data}) => {

  const item = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <OrderItem 
        key={id}
        {...itemProps}
      />
    )
  });

  return (
    <div className='orders__body--items'>
      {item}
    </div>
  )
}

export default OrderList;
import OrderItem from "../OrderItem/OrderItem";

const OrderList = (props) => {

  const {data, className, onOpen} = props;
  const item = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <OrderItem 
        key={id}
        {...item}
        onOpen={onOpen}
        className={className}
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
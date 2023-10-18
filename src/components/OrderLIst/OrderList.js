import OrderItem from "../OrderItem/OrderItem";

const OrderList = (props) => {

  const {data, className, onOpen, onDelete} = props;
  const item = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <OrderItem 
        key={id}
        {...item}
        onOpen={onOpen}
        className={className}
        onDelete={onDelete}
      />
    )
  });

  return (
    <div className='orders__body--items' style={className ? {width: '36%'}: {width: '100%'}}>
      {item}
    </div>
  )
}

export default OrderList;
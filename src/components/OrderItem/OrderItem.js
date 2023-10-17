import { useEffect, useState } from 'react';
import './orderItem.scss';
import getDate from '../sevices/getDate';

const OrderItem = (props) => {
  const [fullDate, setFullDate] = useState('without date');
  const [shortDate, setShortDate] = useState('no date');
  
  const {title, date, count, price, onOpen, className, active} = props;
 
  useEffect(() => {
    setShortDate(getDate(date, 'shortDate'));
    setFullDate(getDate(date, 'fullDate'));
  },[date]);

    return (
      <div className={`item ${className} ${active ? 'active': null}`}>
        <div className='item__title'>
          {title}
        </div>
        <div className='item__menu' onClick={() => onOpen(props)}>
          <span className="material-symbols-outlined">
            list
          </span>
        </div>
        <div className='item__count'>
          <span className='item__count item__count--count'>{count}</span>
          <span className='item__count item__count--description'>Products</span>
        </div>
        <div className='item__date'>
          <span className='item__date item__date--short'>{shortDate}</span>
          <span className='item__date item__date--full'>{fullDate}</span>
        </div>
        <div className='item__price'>
          <span className='item__price item__price--usd'>{price} usd</span>
          <span className='item__price item__price--uah'>2500.50 uah</span>
        </div>
        <div className='item__delete'>
          <span className="material-symbols-outlined">
            delete
          </span>
        </div>
        <div className='item__arrow'>
          <span className="material-symbols-outlined">
            arrow_forward_ios
          </span>
        </div>
      </div>
    )
}

export default OrderItem;
import { useEffect, useState } from 'react';
import './orderItem.scss';

const OrderItem = (props) => {
  const [fullDate, setFullDate] = useState('without date');
  const [shortDate, setShortDate] = useState('no date');
  
  const {title, date, count, price} = props;
 
  useEffect(() => {
    getFullDate(date);
  },[]);

  const getFullDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateArr = date.split('-');
    const month = monthNames[+dateArr[1] - 1].slice(0, 3).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const fullDate = `${dateArr[2]} / ${month} / ${dateArr[0]}`;
    const shortDate = `${dateArr[1]} / ${dateArr[0].slice(2)}`;
    setShortDate(shortDate);
    setFullDate(fullDate);
  }

    return (
      // <div className='item half-screen'>
      <div className='item'>
        <div className='item__title'>
          {title}
        </div>
        <div className='item__menu'>
          <span className="material-symbols-outlined">
            list
          </span>
        </div>
        <div className='item__count'>
          <span className='item__count--count'>{count}</span>
          <span className='item__count--description'>Products</span>
        </div>
        <div className='item__date'>
          <span className='item__date--short'>{shortDate}</span>
          <span className='item__date--full'>{fullDate}</span>
        </div>
        <div className='item__price'>
          <span className='item__price--usd'>{price} usd</span>
          <span className='item__price--uah'>2500.50 uah</span>
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
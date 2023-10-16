import { useEffect, useState } from 'react';
import getDate from '../sevices/getDate';

import './product-item.scss';

const ProductItem = (props) => {
  const [firstGuaranteeDate, setFirstGuaranteeData] = useState('');
  const [secondGuaranteeDate, setSecondGuaranteeData] = useState('');
  const [valueUsd, setValueUsd] = useState('');
  const [valueUah, setValueUah] = useState('');
  const [fullDate, setFullDate] = useState('');
  const [shortDate, setShortDate] = useState('');

  const {serialNumber, isNew ,freeOrNot, photo, title, type, specification, guarantee, price, date, owner} = props;

  useEffect(() => {
    getGuarnteeDate(guarantee);
    setValue(price);
    setFullDate(getDate(date, 'fullDate'));
    setShortDate(getDate(date, 'shortDate'));
  }, [date, guarantee, price])

  const setValue = (price) => {
    price.map(item => {
      if(item.isDefault) {
        setValueUah(item.value);
      } else if (!item.isDefault) {
        setValueUsd(item.value);
      } else {
        return 'value error';
      }
    })
  }
  
  const getGuarnteeDate = (data) => {
    setFirstGuaranteeData(data.start.split(' ')[0].split('-').reverse().join('/'));
    setSecondGuaranteeData(data.end.split(' ')[0].split('-').reverse().join('/'))
  };

  return (
    <li>
      <div className='product-item'>
        <div className={`product-item__cirle ${isNew ? 'yellow': 'green'}`}></div>
        <div className='product-item__image'>
          <img src={photo} alt='user' />
        </div>
        <div className='product-item__title'>
          {title}
          <span>{serialNumber}</span>
        </div>
        <div className='product-item__satus'>
          <span className={freeOrNot ? 'yellow': null}>{freeOrNot ? 'free': 'occup'}</span>
        </div>
        <div className='product-item__status-date'>
          <span>c  {firstGuaranteeDate}</span>
          <span>по {secondGuaranteeDate}</span>
        </div>
        <div className='product-item__state'>
          <span>{isNew ? 'new': 'used'}</span>
        </div>
        <div className='product-item__price'>
          <span className='product-item__price product-item__price--usd'>{valueUsd} usd</span>
          <span className='product-item__price product-item__price--uah'>{valueUah} uah</span>
        </div>
        <div className='product-item__group-name'>
          {type}
        </div>
        <div className='product-item__owner'>
          {owner}
        </div>
        <div className='product-item__order-name'>
          {specification}
        </div>
        <div className='product-item__date'>
          <span className='product-item__date product-item__date--short'>{shortDate}</span>
          <span className='product-item__date product-item__date--full'>{fullDate}</span>
        </div>
        <div className='product-item__delete'>
          <span className="material-symbols-outlined">
            delete
          </span>
        </div>
      </div>
    </li>
  )
}

export default ProductItem;
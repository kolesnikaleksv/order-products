import { useEffect, useState } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import AddButton from '../AddButton/AddButton';
import useDataService from '../sevices/DataService';
import { v4 as uuidv4 } from 'uuid';

import './currentOrder.scss';

const CureentOrder = ({order ,onClose}) => {

  const [dataProducts, setDataProducts] = useState([]);

  const { fetchData } = useDataService();

  const { id} = order;

  const getData = () => {
    fetchData('http://localhost:5000/products')
      .then(data => {
        setDataProducts(data.filter(item => item.order === id))
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    getData()
  }, [order])

  return (
    <div className="current-order">
      <div className="current-order__head">
        <h2 className="current-order__head--title">{order.title}
        </h2>
        <div className="current-order__head--add-block">
          <AddButton size={'small'}/>
          <span>Add product</span>
        </div>
      </div>
      <div className="current-order__body">
        <ul className='current-order__list'>
          {
            dataProducts.length ?
            dataProducts.map(item => {
              const {title, photo, freeOrNot, isNew, serialNumber} = item;
              return (
              <li key={uuidv4()}>
                  <div className='current-product-item'>
                    <div className={`current-product-item__cirle ${isNew ? 'yellow': 'green'}`}></div>
                    <div className='current-product-item__image'>
                      <img src={photo} alt='user' />
                    </div>
                    <div className='current-product-item__title'>
                      {title}
                      <span>{serialNumber}</span>
                    </div>
                    <div className='current-product-item__satus'>
                      <span className={freeOrNot ? 'yellow': null}>{freeOrNot ? 'free': 'occup'}</span>
                    </div>
                    <div className='current-product-item__delete'>
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </div>
                  </div>
              </li>
              )
            })
            :<h3>There are no products in this order</h3>
          }
        </ul>
      </div>
      <CloseButton onClose={onClose}/>
    </div>
  )
}

export default CureentOrder;
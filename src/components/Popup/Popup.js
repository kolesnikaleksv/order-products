import CloseButton from '../CloseButton/CloseButton';
import './popup.scss';

const Popup = (props) => {

  const {onDelete, onClose, order} = props;
  const {sumUah, sumUsd, title, count} = order;
  return (
    <div className='popup' onClick={onClose}>
      <div className='popup__container' onClick={(e) => e.stopPropagation()}>
          <p className='popup__question'>Are you sure you want to delete this order?</p>
        <div className='popup-order'>
          <div className='popup-order__count'>
            <span className='popup-order popup-order__count--count'>{count}</span>
            <span className='popup-order popup-order__count--description'>Products</span>
          </div>
          <div className='popup-order__title'>
            {title}
          </div>
          <div className='popup-order__price'>
            <span className='item__price item__price--usd'>{sumUsd} usd</span>
            <span className='item__price item__price--uah'>{sumUah} uah</span>
          </div>
        </div>
        <div className='popup__footer'>
          <button className='popup-button popup-button--discard' onClick={onClose}>discard</button>
          <button className='popup-button popup-button--delete' onClick={() => onDelete(order.id)}>
            <span className="material-symbols-outlined">delete</span>
              delete
          </button>
        </div>
      <CloseButton onClose={onClose} />
      </div>
    </div>
  )
}

export default Popup;
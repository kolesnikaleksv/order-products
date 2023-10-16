import CloseButton from '../CloseButton/CloseButton';
import AddButton from '../AddButton/AddButton';

import './currentOrder.scss';

const CureentOrder = ({onClose}) => {
  return (
    <div className="current-order">
      <div className="current-order__head">
        <h2 className="current-order__head--title">
          Really long title for order Really long title for order Really long title for order Really long title for order
        </h2>
        <div className="current-order__head--add-block">
          <AddButton size={'small'}/>
          <span>Add product</span>
        </div>
      </div>
      <div className="current-order__body">

      </div>
      <CloseButton onClose={onClose}/>
    </div>
  )
}

export default CureentOrder;
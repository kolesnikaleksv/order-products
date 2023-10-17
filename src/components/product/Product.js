import { useEffect, useState } from 'react';
import ProductList from '../ProductLIst/ProductList';

import './product.scss';

const Product = () => {
  const [typeOfProduct, setTypeOfProduct] = useState(null);
  const [renderingData, setRenderingData] = useState([]);
  const [dataProduct] = useState([
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        freeOrNot: true,
        photo: 'https://i.imgflip.com/k0bjz.jpg',
        title: ' Samsung Odyssey G4 S25BG40 (LS25BG400EIXCI) IPS Full HD / 240Гц / 8-Bit / sRGB 99% / HDR10 / nVidia G-SYNC Compatible / AMD FreeSync Premium',
        type: 'Monitors',
        specification: 'Specification 1',
        owner: 'Oleksandr Kolisnyk',
        guarantee: {
          start: '2017-06-28 12:09:33',
          end: '2017-06-28 12:09:33'
        },
        price: [
          {value: 100, symbol: 'USD', isDefault: 0},
          {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-06-29 12:09:33'
      },
      {
        id: 2,
        serialNumber: 1234,
        freeOrNot: false,
        isNew: 0,
        owner: 'Lubov Manakova',
        photo: 'https://clideo.com/assets/images/meme-templates/meme-demo-template-7-lg.png',
        title: 'Product 1',
        type: 'JavaScript asdfasd asdf',
        specification: 'Specification 1',
        guarantee: {
          start: '2017-06-27 12:09:33',
          end: '2017-06-27 12:09:33'
        },
        price: [
          {value: 100, symbol: 'USD', isDefault: 0},
          {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 2,
        date: '2017-10-06 12:09:33'
      },
      {
        id: 3,
        serialNumber: 'SN-12 2342342342',
        freeOrNot: true,
        isNew: 1,
        owner: 'Kyrylo Kolisnyk',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZGp6ooThTtAMnkgYED22GAJVCNZOx3b1Ml9HNnyHuyx3u4vwxfGQvR9wlivBjpLySaCE&usqp=CAU',
        title: '23.8" Gigabyte G24F 2 Gaming Monitor (24F / 24F2)',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
          start: '2017-06-29 12:09:33',
          end: '2017-06-29 12:09:33'
        },
        price: [
          {value: 100, symbol: 'USD', isDefault: 0},
          {value: 2600, symbol: 'UAH', isDefault: 1}
        ],
        order: 1,
        date: '2017-09-25 12:09:33'
      }
    ]
  )

  useEffect(() => {
    setRenderingData(dataProduct.filter(item => item.type === typeOfProduct ? item : null))
  },[typeOfProduct]);

  const handleTypeOfProduct = (e) => {
    setTypeOfProduct(e.target.value !== 'select' ? e.target.value : null)
  }
 
  return (
    <div className='product' data-testid="product-page">
      <div className='product__header'>
        <h1>Products / 25</h1>
        <form action="#">
          <label htmlFor="type">Type of products:</label>
          <select name="types" id="type" onChange={handleTypeOfProduct}>
            <option value="select">Select a type of products</option>
            <option value="JavaScript asdfasd asdf">JavaScript asdfasd asdf</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="Monitors">Monitors</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
        </form>
			</div>
      <div className='product__body'>
        <ProductList data={typeOfProduct ? renderingData : dataProduct} />
			</div>
    </div>
  )
}

export default Product;
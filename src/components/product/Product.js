import { useEffect, useState } from 'react';
import ProductList from '../ProductLIst/ProductList';
import useDataService from '../sevices/DataService';

import './product.scss';

const Product = () => {
  const [typeOfProduct, setTypeOfProduct] = useState(null);
  const [renderingData, setRenderingData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);

  const {fetchData} = useDataService();

  const getData = () => {
    fetchData('http://localhost:4000/products')
      .then(data => {
        setDataProduct(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  useEffect(() => {
    getData();
  },[]);

  useEffect(() => {
      setRenderingData(dataProduct.filter(item => item.type === typeOfProduct ? item : null))
  }, [ dataProduct ,typeOfProduct ]);
 
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
import { useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetching, productsFetched, activeFilterChanged, productsFetchingError} from '../../actions/actions';
import ProductList from '../ProductLIst/ProductList';
import useDataService from '../sevices/DataService';

import './product.scss';

const Product = () => {
  const filteredProductSelector = createSelector(
    (state) => state.productsReducer.activeFilter,
    (state) => state.productsReducer.products,
    (filter, products) => {
      if(filter === 'all') {
        return products;
      } else {
        return products.filter(item => item.type === filter)
      }
    }
  )

  const filteredProducts = useSelector(filteredProductSelector);

  const { fetchData } = useDataService();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetching())
    fetchData('http://localhost:5000/products')
      .then(data => {
        dispatch(productsFetched(data))
      })
      .catch(error => {
        dispatch(productsFetchingError());
      });
  },[])

  return (
    <div className='product' data-testid="product-page">
      <div className='product__header'>
        <h1>Products / 25</h1>
        <form action="#">
          <label htmlFor="type">Type of products:</label>
          <select name="types" id="type" onChange={(e) => dispatch(activeFilterChanged(e.target.value))}>
            <option value="all">Select a type of products</option>
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
        <ProductList data={filteredProducts} />
			</div>
    </div>
  )
}

export default Product;
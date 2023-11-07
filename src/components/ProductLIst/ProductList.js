import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";

const ProductList = ({data}) => {

  const productsLoadingStatus = useSelector(state => state.productsReducer.productsLoadingStatus);
  
  if(productsLoadingStatus === 'error') {
    return (
      <div>Something went wrong</div> 
    )
  } else if(productsLoadingStatus === 'loading') {
    return (
      <Spinner/>
    )
  }

  if(!data.length) {
    return(
      <div>There are no products of the selected type</div> 
    )
  }
  
  const item = data.map(item => {
    const {id, ...dataProduct} = item;
    return (
      <ProductItem 
        key={id}
        {...dataProduct}
      />
    )
  })

  return (
    <ul className='product__list'>
      {item}
    </ul>
  )
}

export default ProductList;
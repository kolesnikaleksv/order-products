import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({data}) => {
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
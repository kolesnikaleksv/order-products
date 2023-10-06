import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({data}) => {
  
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
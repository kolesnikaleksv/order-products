const initialState = {
  ordersList: [],
  ordersLoadingStatus: 'idle',
  products: [],
  productsLoadingStatus: 'idle'
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ORDERS_FETCHING":
      return {
        ...state,
        ordersLoadingStatus: 'loading'
      }
    case "ORDERS_FETCHED":
      return {
        ...state,
        ordersList: action.payload
      }
    case "PRODUCTS_FETCHING":
      return {
        ...state,
        productsLoadingStatus: 'loading'
      }
    case "PRODUCTS_FETCED":
      return {
        ...state,
        products: action.payload,
        productsLoadingStatus: 'idle'
      }
    case "PRODUCTS_ERROR":
      return {
        ...state,
        productsLoadingStatus: 'error'
      }
    default: return state;
  }
}

export default productReducer;
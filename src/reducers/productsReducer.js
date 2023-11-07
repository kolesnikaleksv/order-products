import { createReducer } from "@reduxjs/toolkit";
import { productsFetching, productsFetched, activeFilterChanged, productsFetchingError } from "../actions/actions";

const initialState = {
  products: [],
  productsLoadingStatus: 'idle',
  activeFilter: 'all'
}

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(productsFetching, (state) => {
      state.productsLoadingStatus = 'loading';
    })
    .addCase(productsFetched, (state, action) => {
      state.products = action.payload;
      state.productsLoadingStatus = 'idle';
    })
    .addCase(activeFilterChanged, (state, action) => {
      state.activeFilter = action.payload;
    })
    .addCase(productsFetchingError, (state) => {
      state.productsLoadingStatus = 'error';
    })
})

export default productsReducer;
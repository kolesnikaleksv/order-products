import { createAction } from "@reduxjs/toolkit";

export const ordersFetching = () => {
  return {
    type: 'ORDERS_FETCHING'
  }
}

export const ordersFetched = (heroes) => {
  return {
    type: 'ORDERS_FETCHED',
    payload: heroes
  }
}

export const productsFetching = createAction('PRODUCTS_FETCHING');
export const productsFetched = createAction('PRODUCTS_FETCHED');
export const productsFetchingError = createAction('PRODUCTS_FETCHING_ERROR');
export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED');

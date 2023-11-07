import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../reducers/reducer';
import productsReducer from '../reducers/productsReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({productsReducer: productsReducer, orderReducer: orderReducer})
const store = configureStore({reducer})

export default store;
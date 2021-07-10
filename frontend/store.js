import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { mobileListReducer,brandListReducer } from './reducers/mobileReducers';
import {filterMobilesReducer,filterBrandReducer} from './reducers/filterReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    mobileList: mobileListReducer,
    brandList:brandListReducer,
    filterMobile:filterMobilesReducer,
    filterBrand:filterBrandReducer
})
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnchancer(applyMiddleware(thunk)));

export default store;

//react-thunk: middleware for redux and it allows to run async operations inside action in redux.
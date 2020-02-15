import {combineReducers} from 'redux';
import productReducer from './productReducer';
import orderReducer from './orderReducer';
import { reducer as reduxForm} from 'redux-form';
const rootReducer = combineReducers({
    orders: orderReducer,
    products: productReducer,
    form: reduxForm
});

export default rootReducer;
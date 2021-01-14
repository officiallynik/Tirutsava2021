import { combineReducers } from 'redux';
import authReducer from '../reducers/auth';
import notifyReducer from './notify';

const rootReducer = combineReducers({
    auth: authReducer,
    notify: notifyReducer
});

export default rootReducer;
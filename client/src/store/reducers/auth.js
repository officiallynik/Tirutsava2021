import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './helper';

const initialState = {
    tokenId: null,
    googleId: null,
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        tokenId: action.tokenId,
        googleId: action.googleId
     });
};

const authLogout = (state, action) => {
    return updateObject(state, { tokenId: null, googleId: null });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;
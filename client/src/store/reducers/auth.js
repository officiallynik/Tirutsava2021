import * as actionTypes from '../actions/actionTypes';
import { updateObject } from './helper';

const initialState = {
    tokenId: null,
    googleId: null,
    authPopup: false,
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

const authPopup = (state, action) => {
    return updateObject(state, { 
        authPopup: !state.authPopup, 
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_POPUP: return authPopup(state, action);
        default:
            return state;
    }
};

export default reducer;
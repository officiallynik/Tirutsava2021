import * as actionTypes from './actionTypes';

export const authSuccess = (tokenId, googleId) => {
    // console.log(tokenId, googleId);
    localStorage.setItem('tokenId', tokenId);
    localStorage.setItem('googleId', googleId);
    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId,
        googleId
    };
};

export const logout = () => {
    localStorage.removeItem('tokenId');
    localStorage.removeItem('googleId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('tokenId');
        if (!token) {
            dispatch(logout());
        }
    };
};

export const authPopup = () => {
    return {
        type: actionTypes.AUTH_POPUP,
    }
}
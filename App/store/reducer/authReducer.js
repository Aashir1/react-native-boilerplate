import actionType from '../constants/constant';
let initialState = {
    progressBar: false,
    currentUser: ''
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.LOGIN_REQUEST:
            console.log('login request');
            return Object.assign({}, state, { progressBar: true });

        case actionType.LOGIN_SUCCEED:
            return Object.assign({}, state, { progressBar: false });

        case actionType.SIGNUP_REQUEST:
            return Object.assign({}, state, { progressBar: true });

        case actionType.SIGNUP_SUCCEED:
            return Object.assign({}, state, { progressBar: false });

        default:
            return state;
    }
}

export default authReducer;
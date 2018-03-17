import actionType from '../constants/constant';
import firebase from 'react-native-firebase';

export default class AuthActions {
    static login(email, password, navigate) {
        return (dispatch) => {
            dispatch(AuthActions.loginRequest());
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    console.log(navigate);
                    dispatch(AuthActions.loginSucceed());
                    navigate('Home');
                })
                .catch((error) => {
                    // dispatch(AuthActions.isError());
                    alert(error.message);
                })
        }
    }
    static signup(name, email, password, navigate) {
        return (dispatch) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                    dispatch(AuthActions.signupRequest());
                    user.updateProfile({
                        displayName: name
                    })
                        .then(() => {
                            dispatch(AuthActions.signupSucceed());
                            console.log(user);
                            console.log(navigate);
                            navigate('Home');
                        })
                        // .catch(error => {
                        //     dispatch(AuthActions.signupSucceed());
                        //     alert(error.message);
                        // })
                })
                .catch(error => {
                    alert(error.message);
                })
        }
    }
    static loginRequest() {
        return {
            type: actionType.LOGIN_REQUEST
        }
    }
    static loginSucceed() {
        return {
            type: actionType.LOGIN_SUCCEED
        }
    }
    static isError() {
        return {
            type: action.IS_ERROR
        }
    }
    static signupRequest() {
        return {
            type: actionType.SIGNUP_REQUEST
        }
    }
    static signupSucceed() {
        return {
            type: actionType.SIGNUP_SUCCEED
        }
    }
}

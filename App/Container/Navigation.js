import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Signup from '../Component/signup';
import Login from '../Component/login';
import Home from '../Component/home';
const AuthStack = StackNavigator(
  {
    SignUp: {
      screen: Signup,
    },
    LogIn: {
      screen: Login,
    },
    Home:{
      screen: Home
    }
  },
  {
    initialRouteName: 'LogIn',
  }
);


// const prevGetStateForActionHomeStack = AuthStack.router.getStateForAction;
// AuthStack.router = {
//   ...AuthStack.router,
//   getStateForAction = (action, state) => {
//       if (state && action.type === 'ReplaceCurrentScreen') {
//         const routes = state.routes.slice(0, state.routes.length - 1);
//         routes.push(action);
//         return {
//           ...state,
//           routes,
//           index: routes.length - 1,
//         };
//       }
//       return prevGetStateForActionHomeStack(action, state);
//     }
// }

export default class App extends React.Component {
  render() {
    return <AuthStack />;
  }
}
import React, { Component }  from "react";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from "react-redux";
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { StyleSheet } from "react-native";
import LoginScreen from "./components/LoginScreen";
import MainScreenNavigator from "./components/MainScreenNavigator";
import { createLogger } from 'redux-logger';

const headerStyles = StyleSheet.create({
    headerTitle: {
        marginLeft: "auto",
        marginRight: "auto"
    }
});

const navigationConfig = {
    navigationOptions: {
        headerBackTitle: null,
        headerTitleStyle: headerStyles.headerTitle,
    }
};

export const AppNavigator = StackNavigator(
    {
        Login: { screen: LoginScreen },
        Main: { screen: MainScreenNavigator }
    },
    navigationConfig
);

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const appReducer = combineReducers({
  nav: navReducer,
});

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

let middlewares = [
    createLogger(),
];

const store = createStore(appReducer, applyMiddleware(...middlewares));

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

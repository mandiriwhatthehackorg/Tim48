import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import Main from "./app/screens/main";
import configuration from "./app/configuration/store";
import user from "./app/actions/user";

const store = configuration();

export default class App extends React.Component {
    componentWillMount() {
        store.dispatch(user.get());
    }

    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

AppRegistry.registerComponent("WhatTheHack", () => App);

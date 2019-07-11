import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import Main from "./app/screens/main";
import configuration from "./app/configurations/store";

const store = configuration();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

AppRegistry.registerComponent("WhatTheHack", () => App);

import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import { createLogger } from "redux-logger";
import reducer from "../reducers";

const navigation = createReactNavigationReduxMiddleware(
    "root",
    state => state.navigation
);

export default function(state: Object = {}) {
    return createStore(
        reducer,
        state,
        compose(applyMiddleware(thunk, navigation, createLogger()))
    );
}

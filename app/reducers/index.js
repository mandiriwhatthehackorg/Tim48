import { combineReducers } from "redux";
import navigation from "./navigation";
import login from "./auth/login";

const reducer = combineReducers({
    navigation,
    login
});

export default reducer;

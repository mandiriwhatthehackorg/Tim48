import { AsyncStorage } from "react-native";
import login from "../actions/auth/login";
import constants from "../constants/user";

export default {
    get: store => next => action => {
        if (action.type === constants.get) {
            AsyncStorage.getItem("user").then(data => {
                if (data) {
                    const user = JSON.parse(data);
                    store.dispatch(login.set(user));
                }
                next(action);
            });
        } else {
            next(action);
        }
    },

    delete: store => next => action => {
        if (action.type === constants.delete) {
            AsyncStorage.removeItem("user").then(() => {
                store.dispatch(login.reset());
                next(action);
            });
        } else {
            next(action);
        }
    },

    save: store => next => action => {
        if (action.type === constants.save) {
            AsyncStorage.setItem(
                "user",
                JSON.stringify({
                    id: action.id,
                    name: action.name,
                    token: action.token
                }),
                () => {
                    next(action);
                }
            );
        } else {
            next(action);
        }
    }
};

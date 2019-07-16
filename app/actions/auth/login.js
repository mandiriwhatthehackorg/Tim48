import api from "../../api/auth/login";
import constants from "../../constants/login";

const login = {
    error(data) {
        return {
            error: data,
            type: constants.error
        };
    },

    get() {
        return {
            type: constants.get
        };
    },

    set(data) {
        return {
            user: data,
            type: constants.set
        };
    }
};

export default {
    login(email, password, callback) {
        return dispatch => {
            dispatch(login.get());

            return api
                .post(email, password)
                .then(response => response.json())
                .then(data => {
                    dispatch(login.set(data));
                    callback(data);
                })
                .catch(data => {
                    dispatch(login.error(data));
                    callback();
                });
        };
    },

    reset() {
        return {
            type: constants.reset
        };
    },

    set(data) {
        return {
            user: data,
            type: constants.set
        };
    }
};

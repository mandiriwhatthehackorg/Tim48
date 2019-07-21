import api from "../../api/auth/register";
import constants from "../../constants/register";

const register = {
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
    register(email, password, callback) {
        return dispatch => {
            dispatch(register.get());

            return api
                .post(email, password)
                .then(response => response.json())
                .then(data => {
                    dispatch(register.set(data));
                    callback(data);
                })
                .catch(data => {
                    dispatch(register.error(data));
                    callback();
                });
        };
    }
};

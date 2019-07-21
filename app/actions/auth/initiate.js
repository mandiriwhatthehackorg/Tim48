import api from "../../api/auth/initiate";
import constants from "../../constants/initiate";

const initiate = {
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
    initiate(email, password, callback) {
        return dispatch => {
            dispatch(initiate.get());

            return api
                .post(email, password)
                .then(response => response.json())
                .then(data => {
                    dispatch(initiate.set(data));
                    callback(data);
                })
                .catch(data => {
                    dispatch(initiate.error(data));
                    callback();
                });
        };
    }
};

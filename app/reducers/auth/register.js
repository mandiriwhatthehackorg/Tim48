import constants from "../../constants/register";

export default function(
    state = {
        error: null,
        user: {},
        loading: false
    },

    action = {}
) {
    switch (action.type) {
        case constants.error:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            });

        case constants.get:
            return Object.assign({}, state, {
                error: null,
                loading: true
            });

        case constants.set:
            return Object.assign({}, state, {
                error: null,
                user: action.user,
                loading: false
            });

        default:
            return state;
    }
}

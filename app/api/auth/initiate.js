import application from "../../configuration/application";

const api = {
    path: "/user/login",
    headers: {
        Accept: "application/json",
        headers: {
            "Content-Type": "application/json"
        }
    }
};

export default {
    post: async function(email, password) {
        const url = application.api.auth + api.path;

        return fetch(url, {
            ...api.headers,
            body: JSON.stringify({
                email: email,
                password: password
            }),
            method: "POST"
        });
    }
};

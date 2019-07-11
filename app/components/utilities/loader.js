import React from "react";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(["small", "large"]),
    color: PropTypes.oneOf(["#fff", "#1C75BC"])
};

Loader.defaultProps = {
    size: "large",
    color: "#1C75BC"
};

export default function Loader(props) {
    if (!props.loading) {
        return null;
    }

    return (
        <ActivityIndicator
            animating={props.loading}
            size={props.size}
            color={props.color}
            style={{ alignSelf: "center" }}
        />
    );
}

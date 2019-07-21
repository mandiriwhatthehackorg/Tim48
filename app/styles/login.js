export default {
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    ribbon: {
        view: {
            paddingVertical: 16,
            alignItems: "flex-end"
        },
        image: {
            width: 69,
            height: 64
        }
    },
    background: {
        view: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center"
        },
        image: {
            width: 354,
            height: 267,
            opacity: 0.5
        }
    },
    form: {
        position: "absolute",
        top: 104,
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: "center"
    },
    center: {
        alignItems: "center"
    },
    logo: {
        width: 195,
        height: 101
    },
    button: {
        view: {
            backgroundColor: "#003A70",
            width: 256,
            height: 48,
            borderRadius: 4,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            color: "#fff",
            fontFamily: "MyriadPro-Regular",
            fontSize: 16
        }
    },
    field: {
        borderColor: "#003D79",
        borderWidth: 2,
        borderRadius: 4,
        width: 256,
        height: 42
    },
    input: {
        color: "#003A70",
        fontFamily: "MyriadPro-Light",
        fontSize: 14,
        paddingHorizontal: 8
    },
    label: {
        view: {
            backgroundColor: "#fff",
            paddingHorizontal: 4,
            position: "absolute",
            top: -8,
            left: 8
        },
        text: {
            color: "#003A70",
            fontFamily: "MyriadPro-Regular",
            fontSize: 9
        }
    }
};

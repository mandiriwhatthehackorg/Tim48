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
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    header: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    name: {
        color: "#000",
        fontFamily: "MyriadPro-Bold",
        fontSize: 30
    },
    account: {
        color: "#000",
        fontFamily: "MyriadPro-Light",
        fontSize: 20
    },
    caption: {
        color: "#000",
        fontFamily: "MyriadPro-Bold",
        fontSize: 20
    },
    col: {
        flexDirection: "row",
        alignItems: "center"
    },
    profile: {
        button: {
            width: 32,
            height: 32,
            borderColor: "#707070",
            borderWidth: 1,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 8
        },
        icon: {
            width: 17,
            height: 18
        }
    },
    message: {
        width: 29,
        height: 23
    },
    footer: {
        padding: 16,
        alignItems: "center"
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
    }
};

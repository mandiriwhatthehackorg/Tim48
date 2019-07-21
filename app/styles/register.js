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
    label: {
        color: "#000",
        fontFamily: "MyriadPro-Regular",
        fontSize: 14,
        paddingBottom: 4
    },
    text: {
        color: "#000",
        fontFamily: "MyriadPro-Regular",
        fontSize: 14
    },
    input: {
        bordered: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingHorizontal: 8,
            borderColor: "#868686",
            borderWidth: 1,
            color: "#000",
            fontFamily: "MyriadPro-Regular",
            fontSize: 14
        },
        borderless: {
            paddingTop: 0,
            paddingBottom: 0,
            color: "#000",
            fontFamily: "MyriadPro-Regular",
            fontSize: 14,
            minHeight: 44
        }
    },
    dropdown: {
        borderColor: "#868686",
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 8,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        width: 15,
        height: 8
    },
    caption: {
        color: "#000",
        fontFamily: "MyriadPro-Bold",
        fontSize: 20
    },
    field: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#868686",
        borderWidth: 1,
        paddingHorizontal: 8
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

import { Platform } from "react-native";
import Dimensions from "Dimensions";

const { height, width } = Dimensions.get("window");

export default {
    os: {
        android: Platform.OS === "android",
        ios: Platform.OS === "ios"
    },

    height,

    width,

    iphonex:
        Platform.OS === "ios" &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (height === 812 || width === 812)
};

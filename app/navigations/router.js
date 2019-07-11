import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import Splash from "../screens/splash";
import Login from "../screens/login";
import Home from "../screens/home";
import OTP from "../screens/otp";

const AuthStack = createStackNavigator(
    {
        otp: {
            screen: OTP
        },
        login: {
            screen: Login
        }
    },
    {
        headerMode: "none"
    }
);

const MainStack = createStackNavigator({
    home: {
        screen: Home
    }
});

const Root = createSwitchNavigator(
    {
        splash: {
            screen: Splash
        },
        auth: {
            screen: AuthStack
        },
        main: {
            screen: MainStack
        }
    },
    {
        headerMode: "none"
    }
);

export default Root;

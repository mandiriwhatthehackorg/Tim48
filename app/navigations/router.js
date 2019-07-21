import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import Onboarding from "../screens/onboarding";
import Login from "../screens/login";
import RegisterMerchant from "../screens/register/merchant";
import RegisterVendor from "../screens/register/vendor";
import Profile from "../screens/profile";
import Payment from "../screens/payment";
import History from "../screens/history";
import Profit from "../screens/profit";
import Notification from "../screens/notification";
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

const MainStack = createStackNavigator(
    {
        merchant: {
            screen: RegisterMerchant
        },
        vendor: {
            screen: RegisterVendor
        },
        profile: {
            screen: Profile
        },
        payment: {
            screen: Payment
        },
        history: {
            screen: History
        },
        profit: {
            screen: Profit
        },
        notification: {
            screen: Notification
        }
    },
    {
        headerMode: "none"
    }
);

const Root = createSwitchNavigator(
    {
        onboarding: {
            screen: Onboarding
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

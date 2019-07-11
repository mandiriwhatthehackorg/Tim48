import React from "react";
import { Container, Content } from "native-base";
import CodeInput from "react-native-confirmation-code-input";
import styles from "../styles/otp";

export default class OTP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            otp: ""
        };

        this.set = this.set.bind(this);
    }

    set(value) {
        this.setState({ otp: value });
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <CodeInput
                        onFulfill={this.set}
                        activeColor="#1C75BC"
                        inactiveColor="#eaeaea"
                        containerStyle={{ alignItems: "center" }}
                        autoFocus={true}
                        keyboardType="numeric"
                    />
                </Content>
            </Container>
        );
    }
}

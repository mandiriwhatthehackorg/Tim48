import React from "react";
import { View } from "react-native";
import { Container, Content, Text } from "native-base";
import CodeInput from "react-native-confirmation-code-input";
import styles from "../styles/otp";
import layout from "../styles/layout";

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
                    <View style={layout.fill} />
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text>Masukkan kode OTP</Text>
                        <CodeInput
                            onFulfill={this.set}
                            activeColor="#1C75BC"
                            inactiveColor="#eaeaea"
                            autoFocus={true}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={layout.fill} />
                </Content>
            </Container>
        );
    }
}

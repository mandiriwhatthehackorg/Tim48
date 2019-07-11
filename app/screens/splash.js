import React from "react";
import { Container, Content, Text } from "native-base";
import styles from "../styles/splash";

export default class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.navigate = this.navigate.bind(this);
    }

    componentDidMount() {
        setTimeout(this.navigate, 3000);
    }

    navigate() {
        const { navigation } = this.props;
        navigation.navigate("otp");
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.welcome}>Splash Screen</Text>
                </Content>
            </Container>
        );
    }
}

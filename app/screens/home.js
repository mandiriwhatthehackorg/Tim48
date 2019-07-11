import React from "react";
import { Container, Content, Text } from "native-base";
import styles from "../styles/home";

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.welcome}>Home</Text>
                </Content>
            </Container>
        );
    }
}

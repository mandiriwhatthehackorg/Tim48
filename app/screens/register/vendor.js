import React from "react";
import { Container, Content, Text } from "native-base";
import styles from "../../styles/register";

export default class Vendor extends React.Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.welcome}>Vendor</Text>
                </Content>
            </Container>
        );
    }
}

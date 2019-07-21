import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { Container, Content } from "native-base";
import styles from "../styles/onboarding";

export default class OnBoarding extends React.Component {
    login(role) {
        this.props.navigation.navigate("login", { role });
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <View style={styles.ribbon.view}>
                        <Image
                            source={require("../../assets/images/ribbon.png")}
                            style={styles.ribbon.image}
                        />
                    </View>
                    <View style={styles.background.view}>
                        <Image
                            source={require("../../assets/images/background.png")}
                            style={styles.background.image}
                        />
                    </View>
                </Content>
                <View style={styles.form}>
                    <View style={styles.center}>
                        <Image
                            source={require("../../assets/images/logo.png")}
                            style={styles.logo}
                        />
                        <View style={{ paddingTop: 16 }}>
                            <TouchableOpacity
                                onPress={() => this.login("merchant")}
                                style={styles.button.view}
                            >
                                <Text style={styles.button.text}>
                                    Masuk sebagai merchant
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: 16 }}>
                            <TouchableOpacity
                                onPress={() => this.login("vendor")}
                                style={styles.button.view}
                            >
                                <Text style={styles.button.text}>
                                    Masuk sebagai vendor
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

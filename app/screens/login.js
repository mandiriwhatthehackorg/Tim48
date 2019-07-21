import React from "react";
import { View, Image, TouchableOpacity, Text, TextInput } from "react-native";
import { Container, Content } from "native-base";
import styles from "../styles/login";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            loading: false,
            error: false
        };

        this.login = this.login.bind(this);
        this.set = this.set.bind(this);
    }

    login() {
        this.props.navigation.navigate("main");
    }

    set(value) {
        this.setState({ phone: value });
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
                    <View style={styles.form}>
                        <View style={styles.center}>
                            <Image
                                source={require("../../assets/images/logo.png")}
                                style={styles.logo}
                            />
                            <View style={{ marginTop: 16 }}>
                                <View style={styles.field}>
                                    <TextInput
                                        value={this.state.phone}
                                        style={styles.input}
                                        onChangeText={this.set}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View style={styles.label.view}>
                                    <Text style={styles.label.text}>
                                        Nomor telepon
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <TouchableOpacity
                                    onPress={this.login}
                                    style={styles.button.view}
                                >
                                    <Text style={styles.button.text}>
                                        Masuk
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

import React from "react";
import {
    Container,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Text
} from "native-base";
import styles from "../styles/login";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loading: false,
            error: false
        };

        this.login = this.login.bind(this);
        this.username = this.username.bind(this);
        this.password = this.password.bind(this);
    }

    login() {}

    username(value) {
        this.setState({ username: value });
    }

    password(value) {
        this.setState({ password: value });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                value={this.state.username}
                                onChangeText={this.username}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input
                                value={this.state.password}
                                secureTextEntry={true}
                                onChangeText={this.password}
                            />
                        </Item>
                    </Form>
                    <Button
                        block
                        primary
                        style={styles.button}
                        onPress={this.login}
                    >
                        <Text>Sign In</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

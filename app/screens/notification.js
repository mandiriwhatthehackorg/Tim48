import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    FlatList
} from "react-native";
import { Container, Content } from "native-base";
import styles from "../styles/notification";

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dani Taufani",
            account: "131-00-1409025-4",
            items: [
                {
                    date: "22/9/2018",
                    message: "Notifikasi pembayaran 23/08/2019"
                },
                {
                    date: "12/9/2018",
                    message: "Notifikasi pembayaran 26/08/2019"
                }
            ],
            loading: false,
            error: false
        };

        this.message = this.message.bind(this);
        this.profile = this.profile.bind(this);
        this.row = this.row.bind(this);
        this.footer = this.footer.bind(this);
    }

    message() {
        this.props.navigation.navigate("notification");
    }

    profile() {
        this.props.navigation.navigate("merchant", {
            user: {
                address: "Pondok Ungu Permai Blok D15 No. 9 Bekasi",
                district: "Bekasi Utara",
                city: "Kota Bekasi",
                category: "Retail"
            }
        });
    }

    row({ index, item }) {
        return (
            <View
                style={{
                    padding: 16,
                    backgroundColor: "#eaeaea",
                    marginVertical: 2,
                    marginHorizontal: 16
                }}
            >
                <Text
                    style={{
                        color: "#000",
                        fontFamily: "MyriadPro-Regular",
                        fontSize: 14
                    }}
                >
                    {item.message}
                </Text>
            </View>
        );
    }

    footer() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{
                    alignSelf: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 16
                }}
            >
                <Image
                    source={require("../../assets/images/ic-back.png")}
                    style={{ width: 15, height: 14 }}
                />
                <Text
                    style={{
                        color: "#000",
                        fontFamily: "MyriadPro-Regular",
                        fontSize: 14,
                        paddingLeft: 8
                    }}
                >
                    Kembali
                </Text>
            </TouchableOpacity>
        );
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
                        <ScrollView keyboardShouldPersistTaps="handled">
                            <View style={{ height: 104 }} />
                            <View style={styles.header}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.name}>
                                        {this.state.name}
                                    </Text>
                                    <Text style={styles.account}>
                                        {this.state.account}
                                    </Text>
                                </View>
                                <View style={styles.col}>
                                    <TouchableOpacity onPress={this.message}>
                                        <Image
                                            source={require("../../assets/images/ic-message.png")}
                                            style={styles.message}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={this.profile}
                                        style={styles.profile.button}
                                    >
                                        <Image
                                            source={require("../../assets/images/ic-user.png")}
                                            style={styles.profile.icon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <FlatList
                                data={this.state.items}
                                renderItem={this.row}
                                keyExtractor={(item, index) => item.date}
                                ListFooterComponent={this.footer}
                            />
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}

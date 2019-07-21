import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    FlatList,
    ScrollView
} from "react-native";
import { Container, Content } from "native-base";
import styles from "../styles/payment";

export default class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dani Taufani",
            account: "131-00-1409025-4",
            items: [
                {
                    name: "Susi Susanti",
                    kode: "TM48-001",
                    active: true
                },
                {
                    name: "Alan Budikusuma",
                    kode: "TM48-002",
                    active: false
                },
                {
                    name: "Daniel Mananta",
                    kode: "TM48-003",
                    active: true
                }
            ],
            loading: false,
            error: false
        };

        this.message = this.message.bind(this);
        this.profile = this.profile.bind(this);
        this.row = this.row.bind(this);
        this.separator = this.separator.bind(this);
        this.footer = this.footer.bind(this);
        this.pay = this.pay.bind(this);
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

    pay() {
        this.props.navigation.navigate("login");
    }

    separator(section, row, highlighted) {
        return (
            <View
                key={section + "-" + row}
                style={{
                    borderBottomColor: "#707070",
                    borderBottomWidth: 1
                }}
            />
        );
    }

    footer() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity onPress={this.pay} style={styles.button.view}>
                    <Text style={styles.button.text}>Bayar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    indicator(value) {
        if (value) {
            return (
                <View
                    style={{
                        marginLeft: 16,
                        width: 16,
                        height: 16,
                        borderRadius: 8,
                        borderColor: "#003A70",
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <View
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: "#003A70"
                        }}
                    />
                </View>
            );
        }

        return (
            <View
                style={{
                    marginLeft: 16,
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    borderColor: "#555",
                    borderWidth: 1
                }}
            />
        );
    }

    row({ index, item }) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 8
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            color: "#000",
                            fontFamily: "MyriadPro-Regular",
                            fontSize: 16
                        }}
                    >
                        {item.name}
                    </Text>
                </View>
                <Text
                    style={{
                        color: "#000",
                        fontFamily: "MyriadPro-Regular",
                        fontSize: 14
                    }}
                >
                    {item.kode}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        const items = this.state.items;
                        items[index].active = !items[index].active;
                        this.setState({ items: items });
                    }}
                >
                    {this.indicator(item.active)}
                </TouchableOpacity>
            </View>
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
                            <View
                                style={{
                                    paddingHorizontal: 16,
                                    paddingTop: 16
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Text style={styles.caption}>
                                        Pembayaran
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.props.navigation.goBack()
                                        }
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center"
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
                                </View>
                                <FlatList
                                    data={this.state.items}
                                    extraData={this.state}
                                    keyExtractor={(item, index) => item.kode}
                                    renderItem={this.row}
                                    ItemSeparatorComponent={this.separator}
                                    ListFooterComponent={this.footer}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}

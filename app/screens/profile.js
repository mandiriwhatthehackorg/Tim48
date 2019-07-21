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
import Dialog from "../components/profile/dialog";
import styles from "../styles/profile";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dani Taufani",
            account: "131-00-1409025-4",
            items: [],
            modal: false,
            loading: false,
            error: false
        };

        this.message = this.message.bind(this);
        this.profile = this.profile.bind(this);
        this.row = this.row.bind(this);
        this.separator = this.separator.bind(this);
        this.footer = this.footer.bind(this);
        this.modal = this.modal.bind(this);
        this.vendor = this.vendor.bind(this);
        this.logout = this.logout.bind(this);
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

    modal() {
        this.setState({ modal: !this.state.modal });
    }

    logout() {
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
                <TouchableOpacity
                    onPress={this.logout}
                    style={styles.button.view}
                >
                    <Text style={styles.button.text}>Keluar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    vendor(data) {
        this.setState({
            items: [...this.state.items, data]
        });
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
                                <Text
                                    style={{
                                        color: "#000",
                                        fontFamily: "MyriadPro-Bold",
                                        fontSize: 14
                                    }}
                                >
                                    Alamat usaha
                                </Text>
                                <Text
                                    style={{
                                        color: "#000",
                                        fontFamily: "MyriadPro-Regular",
                                        fontSize: 14
                                    }}
                                >
                                    Jl. Kebon Kosong Real Estate, no 10 Teluk
                                    Gong, Jakarta Barat
                                </Text>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal: 16,
                                    paddingTop: 16
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#000",
                                        fontFamily: "MyriadPro-Bold",
                                        fontSize: 14
                                    }}
                                >
                                    Jenis usaha
                                </Text>
                                <Text
                                    style={{
                                        color: "#000",
                                        fontFamily: "MyriadPro-Regular",
                                        fontSize: 14
                                    }}
                                >
                                    Retail
                                </Text>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal: 16,
                                    paddingTop: 16,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "payment"
                                        )
                                    }
                                    style={{ marginHorizontal: 8 }}
                                >
                                    <Image
                                        source={require("../../assets/images/ic-payment.png")}
                                        style={{ width: 69, height: 68 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "history"
                                        )
                                    }
                                    style={{ marginHorizontal: 8 }}
                                >
                                    <Image
                                        source={require("../../assets/images/ic-history.png")}
                                        style={{ width: 69, height: 68 }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate("profit")
                                    }
                                    style={{ marginHorizontal: 8 }}
                                >
                                    <Image
                                        source={require("../../assets/images/ic-profit.png")}
                                        style={{ width: 69, height: 68 }}
                                    />
                                </TouchableOpacity>
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
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={styles.caption}>
                                        Tambah vendor
                                    </Text>
                                    <TouchableOpacity
                                        onPress={this.modal}
                                        style={{ marginHorizontal: 16 }}
                                    >
                                        <Image
                                            source={require("../../assets/images/ic-add.png")}
                                            style={{ width: 17, height: 17 }}
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
                                <Text style={styles.caption}>List vendor</Text>
                                <FlatList
                                    data={this.state.items}
                                    keyExtractor={(item, index) => item.kode}
                                    renderItem={this.row}
                                    ItemSeparatorComponent={this.separator}
                                    ListFooterComponent={this.footer}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </Content>
                <Dialog
                    visible={this.state.modal}
                    close={this.modal}
                    press={this.vendor}
                />
            </Container>
        );
    }
}

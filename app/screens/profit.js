import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView
} from "react-native";
import { Container, Content } from "native-base";
import styles from "../styles/profit";

export default class Profit extends React.Component {
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
            allocation: "",
            debit: "",
            loading: false,
            error: false
        };

        this.message = this.message.bind(this);
        this.profile = this.profile.bind(this);
        this.pay = this.pay.bind(this);
        this.allocation = this.allocation.bind(this);
        this.debit = this.debit.bind(this);
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

    allocation(value) {
        this.setState({ allocation: value });
    }

    debit(value) {
        this.setState({ debit: value });
    }

    pay() {
        this.props.navigation.navigate("");
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
                                        Keuntungan
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
                            </View>
                            <View style={{ paddingHorizontal: 16 }}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingTop: 16
                                    }}
                                >
                                    <View style={{ width: 138 }}>
                                        <Text style={styles.text}>
                                            Alokasi dana
                                        </Text>
                                    </View>
                                    <Text style={styles.text}>Rp.</Text>
                                    <View style={{ flex: 1, paddingLeft: 8 }}>
                                        <TextInput
                                            value={this.state.allocation}
                                            style={styles.input}
                                            keyboardType="numeric"
                                            underlineColorAndroid="transparent"
                                            onChangeText={this.allocation}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingTop: 16
                                    }}
                                >
                                    <View style={{ width: 138 }}>
                                        <Text style={styles.text}>
                                            Pembayaran kredit
                                        </Text>
                                    </View>
                                    <Text style={styles.text}>Rp.</Text>
                                    <View style={{ flex: 1, paddingLeft: 8 }}>
                                        <TextInput
                                            value={this.state.debit}
                                            style={styles.input}
                                            keyboardType="numeric"
                                            underlineColorAndroid="transparent"
                                            onChangeText={this.debit}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.footer}>
                                <TouchableOpacity
                                    onPress={this.pay}
                                    style={styles.button.view}
                                >
                                    <Text style={styles.button.text}>
                                        Bayar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}

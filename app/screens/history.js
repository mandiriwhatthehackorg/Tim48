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
import styles from "../styles/history";

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dani Taufani",
            account: "131-00-1409025-4",
            items: [
                {
                    name: "Susi Susanti",
                    kode: "TM48-001",
                    invoices: [
                        {
                            id: "INV-1",
                            tagihan: "100.000",
                            bayar: "1.000.000",
                            sisa: "900.000"
                        },
                        {
                            id: "INV-2",
                            tagihan: "100.000",
                            bayar: "1.000.000",
                            sisa: "900.000"
                        },
                        {
                            id: "INV-3",
                            tagihan: "100.000",
                            bayar: "1.000.000",
                            sisa: "900.000"
                        }
                    ]
                },
                {
                    name: "Alan Budikusuma",
                    kode: "TM48-002",
                    invoices: [
                        {
                            id: "INV-5",
                            tagihan: "100.000",
                            bayar: "1.000.000",
                            sisa: "900.000"
                        }
                    ]
                }
            ],
            loading: false,
            error: false
        };

        this.message = this.message.bind(this);
        this.profile = this.profile.bind(this);
        this.row = this.row.bind(this);
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

    sublist(items) {
        if (items.length) {
            let rows = [];
            rows.push(
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                color: "#000",
                                fontFamily: "MyriadPro-Bold",
                                fontSize: 14
                            }}
                        >
                            Tagihan
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                color: "#000",
                                fontFamily: "MyriadPro-Bold",
                                fontSize: 14
                            }}
                        >
                            Bayar
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                color: "#000",
                                fontFamily: "MyriadPro-Bold",
                                fontSize: 14
                            }}
                        >
                            Sisa
                        </Text>
                    </View>
                </View>
            );

            items.map(item => {
                rows.push(
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: "#000",
                                    fontFamily: "MyriadPro-Regular",
                                    fontSize: 14
                                }}
                            >
                                {item.id}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: "#000",
                                    fontFamily: "MyriadPro-Regular",
                                    fontSize: 14
                                }}
                            >
                                {item.tagihan}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: "#000",
                                    fontFamily: "MyriadPro-Regular",
                                    fontSize: 14
                                }}
                            >
                                {item.bayar}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: "#000",
                                    fontFamily: "MyriadPro-Regular",
                                    fontSize: 14
                                }}
                            >
                                {item.sisa}
                            </Text>
                        </View>
                    </View>
                );
            });

            return rows;
        }
    }

    row({ index, item }) {
        return (
            <View style={{ marginVertical: 2, marginHorizontal: 16 }}>
                <View
                    style={{
                        padding: 16,
                        backgroundColor: "#eaeaea",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Text
                        style={{
                            color: "#000",
                            fontFamily: "MyriadPro-Semibold",
                            fontSize: 14
                        }}
                    >
                        {item.name}
                    </Text>
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
                {this.sublist(item.invoices)}
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
                                        Riwayat pembayaran
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
                            <FlatList
                                data={this.state.items}
                                renderItem={this.row}
                                keyExtractor={(item, index) => item.kode}
                            />
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}

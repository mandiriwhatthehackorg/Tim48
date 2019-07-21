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
import Picker from "../../components/utilities/picker";
import styles from "../../styles/register";

export default class Merchant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Dani Taufani",
            account: "131-00-1409025-4",
            address: "",
            district: "",
            city: "",
            category: "",
            personal: "50",
            business: "50",
            modal: false,
            loading: false,
            error: false
        };

        this.register = this.register.bind(this);
        this.address = this.address.bind(this);
        this.district = this.district.bind(this);
        this.category = this.category.bind(this);
        this.city = this.city.bind(this);
        this.personal = this.personal.bind(this);
        this.business = this.business.bind(this);
        this.modal = this.modal.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.navigation.state !== prevProps.navigation.state) {
            const { params } = this.props.navigation.state;
            this.setState({
                address: params ? params.user.address : "",
                district: params ? params.user.district : "",
                city: params ? params.user.city : "",
                category: params ? params.user.category : ""
            });
        }
    }

    register() {
        this.props.navigation.navigate("profile");
    }

    address(value) {
        this.setState({ address: value });
    }

    district(value) {
        this.setState({ district: value });
    }

    city(value) {
        this.setState({ city: value });
    }

    category(value) {
        this.setState({ category: value });
    }

    personal(value) {
        this.setState({ personal: value });
    }

    business(value) {
        this.setState({ business: value });
    }

    modal() {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <View style={styles.ribbon.view}>
                        <Image
                            source={require("../../../assets/images/ribbon.png")}
                            style={styles.ribbon.image}
                        />
                    </View>
                    <View style={styles.form}>
                        <ScrollView keyboardShouldPersistTaps="handled">
                            <View style={{ height: 104 }} />
                            <View
                                style={{
                                    paddingHorizontal: 16,
                                    paddingBottom: 16
                                }}
                            >
                                <Text style={styles.name}>
                                    {this.state.name}
                                </Text>
                                <Text style={styles.account}>
                                    {this.state.account}
                                </Text>
                            </View>
                            <View style={{ paddingHorizontal: 16 }}>
                                <View style={{ paddingTop: 16 }}>
                                    <Text style={styles.label}>
                                        Alamat usaha
                                    </Text>
                                    <TextInput
                                        value={this.state.address}
                                        style={{
                                            ...styles.input.bordered,
                                            minHeight: 56
                                        }}
                                        multiline={true}
                                        underlineColorAndroid="transparent"
                                        onChangeText={this.address}
                                    />
                                </View>
                                <View style={{ paddingTop: 16 }}>
                                    <Text style={styles.label}>Kecamatan</Text>
                                    <TextInput
                                        value={this.state.district}
                                        style={{
                                            ...styles.input.bordered,
                                            minHeight: 44
                                        }}
                                        underlineColorAndroid="transparent"
                                        onChangeText={this.district}
                                    />
                                </View>
                                <View style={{ paddingTop: 16 }}>
                                    <Text style={styles.label}>Kota</Text>
                                    <TextInput
                                        value={this.state.city}
                                        style={{
                                            ...styles.input.bordered,
                                            minHeight: 44
                                        }}
                                        underlineColorAndroid="transparent"
                                        onChangeText={this.city}
                                    />
                                </View>
                                <View style={{ paddingTop: 16 }}>
                                    <Text style={styles.label}>
                                        Jenis Usaha
                                    </Text>
                                    <TouchableOpacity
                                        onPress={this.modal}
                                        style={styles.dropdown}
                                    >
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.text}>
                                                {this.state.category ||
                                                    "Pilih jenis usaha"}
                                            </Text>
                                        </View>
                                        <Image
                                            source={require("../../../assets/images/ic-chevron-down.png")}
                                            style={styles.icon}
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
                                <Text style={styles.caption}>
                                    Alokasi dana masuk
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingTop: 16
                                    }}
                                >
                                    <View style={{ width: 86 }}>
                                        <Text style={styles.text}>
                                            Personal
                                        </Text>
                                    </View>
                                    <View style={styles.field}>
                                        <TextInput
                                            value={this.state.personal}
                                            style={styles.input.borderless}
                                            maxLength={3}
                                            keyboardType="numeric"
                                            underlineColorAndroid="transparent"
                                            onChangeText={this.personal}
                                        />
                                        <Text style={styles.text}>%</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingTop: 16
                                    }}
                                >
                                    <View style={{ width: 86 }}>
                                        <Text style={styles.text}>Bisnis</Text>
                                    </View>
                                    <View style={styles.field}>
                                        <TextInput
                                            value={this.state.business}
                                            style={styles.input.borderless}
                                            maxLength={3}
                                            keyboardType="numeric"
                                            underlineColorAndroid="transparent"
                                            onChangeText={this.business}
                                        />
                                        <Text style={styles.text}>%</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.footer}>
                                <TouchableOpacity
                                    onPress={this.register}
                                    style={styles.button.view}
                                >
                                    <Text style={styles.button.text}>
                                        {params ? "Ubah" : "Daftar"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </Content>
                <Picker
                    title="Pilih jenis usaha"
                    visible={this.state.modal}
                    close={this.modal}
                    items={["Retail", "Garment", "Transportasi", "Property"]}
                    selected={this.state.category}
                    press={this.category}
                />
            </Container>
        );
    }
}

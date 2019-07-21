import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView
} from "react-native";
import Modal from "react-native-modal";
import styles from "../../styles/dialog";
import layout from "../../styles/layout";

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    name: "Susi Susanti",
                    kode: "TM48-001"
                },
                {
                    id: 2,
                    name: "Daniel Mananta",
                    kode: "TM48-002"
                },
                {
                    id: 3,
                    name: "Alan Budikusuma",
                    kode: "TM48-003"
                }
            ],
            keyword: ""
        };

        this.set = this.set.bind(this);
    }

    set(value) {
        this.setState({ keyword: value });
    }

    pickers() {
        return (this.state.keyword
            ? this.state.items.filter((item, index) => {
                  return (
                      item.name
                          .toLowerCase()
                          .indexOf(this.state.keyword.toLowerCase()) > -1
                  );
              })
            : this.state.items
        ).map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={styles.button.view}
                    onPress={() => {
                        this.props.press(item);
                        this.props.close();
                    }}
                >
                    <Text style={styles.button.name}>{item.name}</Text>
                    <Text style={styles.button.code}>{item.kode}</Text>
                </TouchableOpacity>
            );
        });
    }

    render() {
        return (
            <Modal
                isVisible={this.props.visible}
                style={layout.center}
                animationIn="fadeIn"
                animationOut="fadeOut"
                onBackdropPress={this.props.close}
                onBackButtonPress={this.props.close}
            >
                <View style={styles.body}>
                    <Text style={styles.title}>Tambah vendor</Text>
                    <TextInput
                        value={this.state.value}
                        placeholder="Cari vendor"
                        underlineColorAndroid="transparent"
                        onChangeText={this.set}
                        style={{
                            backgroundColor: "#eaeaea",
                            paddingHorizontal: 16
                        }}
                    />
                    <ScrollView keyboardShouldPersistTaps="handled">
                        {this.pickers()}
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}

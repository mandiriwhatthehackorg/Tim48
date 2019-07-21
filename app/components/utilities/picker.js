import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "../../styles/picker";
import layout from "../../styles/layout";

function pickers(props) {
    return props.items.map((item, index) => {
        const active = props.selected === item;

        return (
            <TouchableOpacity
                key={index}
                style={styles.button.view}
                onPress={() => {
                    props.press(item);
                    props.close();
                }}
            >
                <Text style={styles.button[active ? "active" : "text"]}>
                    {item}
                </Text>
                {active ? (
                    <Image
                        source={require("../../../assets/images/ic-tick.png")}
                        style={styles.button.icon}
                    />
                ) : null}
            </TouchableOpacity>
        );
    });
}

export default function Picker(props) {
    return (
        <Modal
            isVisible={props.visible}
            style={layout.center}
            animationIn="fadeIn"
            animationOut="fadeOut"
            onBackdropPress={props.close}
            onBackButtonPress={props.close}
        >
            <View style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                {pickers(props)}
            </View>
        </Modal>
    );
}

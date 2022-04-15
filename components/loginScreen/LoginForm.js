import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const LoginForm = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.inputField}>
                <TextInput
                    placeholderTextColor="#444"
                    placeholder="Phone number, username or email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                />
            </View>

            <View style={styles.inputField}>
                <TextInput
                    placeholderTextColor="#444"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                />
            </View>

            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
                <Text style={{ color: "#6BB0F5" }}>Forgot Password?</Text>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => console.log("clicked clicked button button")}
            >
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 10,
        marginTop: 60,
    },
    inputField: {
        borderRadius: 4,
        padding: 6,
        backgroundColor: "#FAFAFA",
        marginBottom: 10,
        borderWidth: 1,
    },
    button: {
        backgroundColor: "#0096F6",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 42,
        borderRadius: 4,
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20,
    },
});

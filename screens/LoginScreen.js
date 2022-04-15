import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import LoginForm from "../components/loginScreen/LoginForm";

const Instagram_Logo =
    "https://www.seekpng.com/png/detail/57-574824_instagram-2016-logo-png-transparent-vector-instagram-png.png";

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: Instagram_Logo, width: 100, height: 100 }}
                />
            </View>
            <LoginForm />
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 30,
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 60,
    },
});

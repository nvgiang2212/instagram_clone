import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <Post />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});

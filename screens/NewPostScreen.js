import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost />
        </SafeAreaView>
    );
};

export default NewPostScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 10 : null,
    },
});

import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";
import { SafeAreaView } from "react-native-safe-area-context";

const NewPostScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost navigation={navigation} />
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

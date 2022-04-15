import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform,
} from "react-native";
import React from "react";
import { DirectionIcon } from "../../data/icons";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={Platform.OS === "ios" ? "dark-content" : null}
            />
            <Header navigation={navigation} />
            <FormikPostUploader />
        </View>
    );
};

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={{ width: "16%", marginLeft: 2 }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={{ uri: DirectionIcon[0].imageUrl }}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>New Post</Text>
            <TouchableOpacity style={{ width: "16%" }}>
                <Text style={[styles.headerText, styles.headerTextShare]}>
                    Share
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddNewPost;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerText: {
        fontWeight: "600",
        fontSize: 18,
    },
    headerTextShare: {
        color: "#2196F3",
    },
});

import {
    ScrollView,
    StyleSheet,
    Image,
    View,
    Text,
    FlatList,
} from "react-native";
import React from "react";
import { USERS } from "../../data/user";

const Stories = () => {
    const renderItem = ({ item }) => (
        <View style={styles.storyItem}>
            <Image style={styles.story} source={{ uri: item.image }}></Image>
            <Text style={styles.userText}>
                {item.user.length > 11
                    ? item.user.slice(0, 10).toLowerCase() + "..."
                    : item.user.toLowerCase()}
            </Text>
        </View>
    );

    return (
        <View style={styles.stories}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={USERS}
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.user}`}
                    horizontal={true}
                ></FlatList>
            </ScrollView>
        </View>
    );
};

export default Stories;

const styles = StyleSheet.create({
    stories: {
        marginBottom: 13,
        marginHorizontal: 3,
    },
    storyItem: {
        width: 85,
        height: 90,
        alignItems: "center",
        justifyContent: "center",
    },
    story: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#ff8501",
    },
    userText: {
        fontSize: 10,
        marginTop: 4,
    },
});

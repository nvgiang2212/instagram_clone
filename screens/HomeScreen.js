import {
    ScrollView,
    StyleSheet,
    StatusBar,
    FlatList,
    View,
} from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import { POSTS } from "../data/posts";
import BottomTabs from "../components/home/BottomTabs";
import { BottomTabIcons } from "../data/icons";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Header navigation={navigation} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <Stories />
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>

            <BottomTabs icons={BottomTabIcons} />
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

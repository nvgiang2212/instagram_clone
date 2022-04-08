import { ScrollView, StyleSheet, StatusBar, FlatList } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
    const renderItem = ({ item, index }) => {
        return <Post post={item} indexKey={index} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Header />

            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <Stories />
            <FlatList
                data={POSTS}
                renderItem={renderItem}
                keyExtractor={(item) => `${Math.random()}`}
                showsVerticalScrollIndicator={false}
            ></FlatList>
            {/* </ScrollView> */}
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
